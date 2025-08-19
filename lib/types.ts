// User Roles
export enum UserRole {
  USER = 'user',
  COMPANY_OWNER = 'owner',
  MODERATOR = 'moderator', 
  ADMIN = 'admin'
}

// Company Status
export enum CompanyStatus {
  PUBLISHED = 'published',
  PENDING = 'pending',
  REJECTED = 'rejected',
  DRAFT = 'draft'
}

// Ownership Request Status
export enum OwnershipStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

// Edit Status
export enum EditStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

// User Profile Interface
export interface UserProfile {
  id: string;
  user_id: string;
  role: UserRole;
  permissions: string[];
  created_at: string;
  updated_at: string;
}

// Company Ownership Interface
export interface CompanyOwnership {
  id: string;
  user_id: string;
  company_id: string;
  status: OwnershipStatus;
  verification_documents?: string[];
  business_registration?: string;
  tax_number?: string;
  contact_phone?: string;
  message?: string;
  moderator_id?: string;
  moderator_note?: string;
  created_at: string;
  updated_at: string;
}

// Company Edit Interface
export interface CompanyEdit {
  id: string;
  company_id: string;
  user_id: string;
  changes: Record<string, any>;
  status: EditStatus;
  moderator_id?: string;
  moderator_note?: string;
  created_at: string;
  updated_at: string;
}

// Permission Helper Functions
export function hasPermission(userRole: UserRole, requiredRole: UserRole): boolean {
  const roleHierarchy = {
    [UserRole.USER]: 0,
    [UserRole.COMPANY_OWNER]: 1,
    [UserRole.MODERATOR]: 2,
    [UserRole.ADMIN]: 3
  };
  
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
}

export function canEditCompany(userRole: UserRole, userId: string, companyId: string, ownerships: CompanyOwnership[]): boolean {
  // Admin can edit all companies
  if (userRole === UserRole.ADMIN) return true;
  
  // Moderator can edit all companies  
  if (userRole === UserRole.MODERATOR) return true;
  
  // Company owner can edit only owned companies
  if (userRole === UserRole.COMPANY_OWNER) {
    return ownerships.some(o => 
      o.user_id === userId && 
      o.company_id === companyId && 
      o.status === OwnershipStatus.APPROVED
    );
  }
  
  return false;
}