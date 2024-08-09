export interface IHotel {
  id: number;
  name: string;
  mainPhotoId?: number;
  photoMainUrl?: string;
  photoUrls?: string[];
  position?: number;
  rankingPosition?: number;
  countryCode?: string;
  latitude?: number;
  longitude?: number;
  priceBreakdown?: PriceBreakdown;
  currency?: string;
  checkin?: CheckInOutTime;
  checkout?: CheckInOutTime;
  checkoutDate?: string;
  checkinDate?: string;
  reviewScore?: number;
  reviewScoreWord?: string;
  reviewCount?: number;
  qualityClass?: number;
  isFirstPage?: boolean;
  accuratePropertyClass?: number;
  propertyClass?: number;
  ufi?: number;
  wishlistName?: string;
  optOutFromGalleryChanges?: number;
  wishlistToggle?: WishlistToggle;
  propertyType?: string;
  proposedAccommodation?: string[];
  priceDetails?: PriceDetails;
  additionalLabels?: AdditionalLabel[];
}

interface PriceDetails {
  info?: string;
  strikethrough?: string | null; // Adjusted to allow null
  gross?: string;
  taxInfo?: string;
}

interface PriceBreakdown {
  strikethroughPrice?: Price;
  benefitBadges?: BenefitBadge[];
  grossPrice?: Price;
  taxExceptions?: any[];
}

interface Price {
  currency?: string;
  value?: number;
}

interface BenefitBadge {
  explanation?: string;
  text?: string;
  identifier?: string;
  variant?: string;
}

interface CheckInOutTime {
  fromTime?: string;
  untilTime?: string;
}

interface WishlistToggle {
  destinationId?: string;
  wishlistName?: string;
  propertyId?: number;
}

interface AdditionalLabel {
  // Define specific properties if known
}
