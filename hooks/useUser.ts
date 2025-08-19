'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { UserRole, UserProfile, CompanyOwnership } from '@/lib/types';

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [ownerships, setOwnerships] = useState<CompanyOwnership[]>([]);
  const [loading, setLoading] = useState(true);
  
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      if (user) {
        // Get user profile
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();
          
        if (profile) {
          setUserProfile(profile);
        } else {
          // Create default user profile if doesn't exist
          const newProfile = {
            user_id: user.id,
            role: UserRole.USER,
            permissions: []
          };
          
          const { data } = await supabase
            .from('user_profiles')
            .insert(newProfile)
            .select()
            .single();
            
          if (data) setUserProfile(data);
        }
        
        // Get company ownerships
        const { data: ownershipData } = await supabase
          .from('company_ownerships')
          .select('*')
          .eq('user_id', user.id);
          
        if (ownershipData) {
          setOwnerships(ownershipData);
        }
      }
      
      setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (!session?.user) {
          setUserProfile(null);
          setOwnerships([]);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  return {
    user,
    userProfile,
    ownerships,
    loading,
    role: userProfile?.role || UserRole.USER,
    isAdmin: userProfile?.role === UserRole.ADMIN,
    isModerator: userProfile?.role === UserRole.MODERATOR || userProfile?.role === UserRole.ADMIN,
    refetch: async () => {
      if (user) {
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();
          
        const { data: ownershipData } = await supabase
          .from('company_ownerships')
          .select('*')
          .eq('user_id', user.id);
          
        setUserProfile(profile);
        setOwnerships(ownershipData || []);
      }
    }
  };
}