export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

export function formatDateShort(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}

export function calculateOccupancy(leasedUnits, totalUnits) {
  if (totalUnits === 0) return 0;
  return Math.round((leasedUnits / totalUnits) * 100);
}

export function generateId() {
  return crypto.randomUUID?.() ?? Math.random().toString(36).substr(2, 9);
}

export const PAYMENT_STATUS = {
  PAID: 'paid',
  PENDING: 'pending',
  LATE: 'late',
  OVERDUE: 'overdue',
};

export const PROPERTY_TYPES = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'house', label: 'Single Family Home' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'condo', label: 'Condo' },
  { value: 'duplex', label: 'Duplex' },
  { value: 'triplex', label: 'Triplex' },
  { value: 'quadplex', label: 'Fourplex' },
  { value: 'commercial', label: 'Commercial' },
];