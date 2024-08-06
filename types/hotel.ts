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
  checkin?: CheckTime;
  checkout?: CheckTime;
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
  additionalLabels?: any[];
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

interface CheckTime {
  fromTime?: string;
  untilTime?: string;
}

interface WishlistToggle {
  destinationId?: string;
  wishlistName?: string;
  propertyId?: number;
}

interface PriceDetails {
  info?: string;
  strikethrough?: string;
  gross?: string;
  taxInfo?: string;
}