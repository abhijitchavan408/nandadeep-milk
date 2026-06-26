"use client";

import { useState } from "react";
import { Image as ImageIcon, MapPin, Leaf, Truck, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface LocationCardProps {
  title: string;
  description: string;
  images: string[];
  icon: React.ReactNode;
  highlights: string[];
  onImageClick: (image: string, title: string) => void;
}

const LocationCard: React.FC<LocationCardProps> = ({
  title,
  description,
  images,
  icon,
  highlights,
  onImageClick,
}) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white">
            {icon}
          </div>
          <h3 className="font-heading text-2xl font-bold text-foreground">
            {title}
          </h3>
        </div>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-3 gap-2 p-4">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="group relative h-56 cursor-pointer overflow-hidden rounded-lg bg-gray-100"
            onClick={() => image && onImageClick(image, title)}
          >
            {image ? (
              <img
                src={image}
                alt={`${title} - Image ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200">
                <ImageIcon className="h-6 w-6 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Highlights */}
      <CardContent className="pt-4">
        <div className="space-y-2">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <span className="text-xs font-bold">✓</span>
              </div>
              <p className="text-sm text-muted-foreground">{highlight}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface DairyLocationsProps {
  tembhurniTitle: string;
  tembhurniDescription: string;
  mumbaiTitle: string;
  mumbaiDescription: string;
  tembhurniImages?: string[];
  mumbaiImages?: string[];
  whyTwoLocationsTitle?: string;
  farmerPartnershipTitle?: string;
  farmerPartnershipDesc?: string;
  distributionExcellenceTitle?: string;
  distributionExcellenceDesc?: string;
  strategicLocationTitle?: string;
  strategicLocationDesc?: string;
  qualityConsistencyTitle?: string;
  qualityConsistencyDesc?: string;
}

export const DairyLocations: React.FC<DairyLocationsProps> = ({
  tembhurniTitle,
  tembhurniDescription,
  mumbaiTitle,
  mumbaiDescription,
  tembhurniImages = ["", "", ""],
  mumbaiImages = ["", "", ""],
  whyTwoLocationsTitle = "Why Two Locations?",
  farmerPartnershipTitle = "Farmer Partnership",
  farmerPartnershipDesc = "Our Tembhurni facility works directly with local farmers, supporting agricultural communities while ensuring quality from the source.",
  distributionExcellenceTitle = "Distribution Excellence",
  distributionExcellenceDesc = "Our Mumbai center enables rapid, efficient delivery to your doorstep while maintaining the cold chain and product quality.",
  strategicLocationTitle = "Strategic Location",
  strategicLocationDesc = "The two-location model ensures fresher milk, better quality control, and faster delivery to thousands of families.",
  qualityConsistencyTitle = "Quality Consistency",
  qualityConsistencyDesc = "Multiple checkpoints throughout the journey guarantee consistent quality and freshness in every delivery.",
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleImageClick = (image: string, location: string) => {
    setSelectedImage(image);
    setSelectedLocation(location);
  };

  return (
    <div className="space-y-12">
      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-0 bg-black p-0">
          <DialogTitle className="sr-only">
            {selectedLocation} - Image View
          </DialogTitle>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative w-full">
            {selectedImage && (
              <img
                src={selectedImage}
                alt={`${selectedLocation} - Full view`}
                className="w-full h-auto"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Locations Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        <LocationCard
          title={tembhurniTitle}
          description={tembhurniDescription}
          images={tembhurniImages}
          icon={<Leaf className="h-5 w-5" />}
          highlights={[
            "Direct farmer collaboration",
            "Fresh milk collection",
            "On-site quality testing",
            "Temperature-controlled storage",
          ]}
          onImageClick={handleImageClick}
        />

        <LocationCard
          title={mumbaiTitle}
          description={mumbaiDescription}
          images={mumbaiImages}
          icon={<Truck className="h-5 w-5" />}
          highlights={[
            "State-of-the-art facility",
            "Hygienic processing",
            "Multiple product creation",
            "Cold chain management",
          ]}
          onImageClick={handleImageClick}
        />
      </div>

      {/* Operations Flow */}
      <div className="mt-16 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 p-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white">
            <Truck className="h-5 w-5" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-foreground">
            From Farm to Your Door
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            {
              number: "1",
              title: "Collection",
              description: "Fresh milk collected from farmers",
              location: "Tembhurni",
            },
            {
              number: "2",
              title: "Quality Check",
              description: "Rigorous testing at farm",
              location: "Tembhurni",
            },
            {
              number: "3",
              title: "Transport",
              description: "Refrigerated vehicles",
              location: "En Route",
            },
            {
              number: "4",
              title: "Processing",
              description: "Expert preparation",
              location: "Mumbai",
            },
            {
              number: "5",
              title: "Final QC",
              description: "Quality verification",
              location: "Mumbai",
            },
            {
              number: "6",
              title: "Delivery",
              description: "Fresh to your home",
              location: "Your Door",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-600 bg-white font-heading text-lg font-bold text-green-600">
                {step.number}
              </div>
              <h4 className="mb-1 font-semibold text-foreground">{step.title}</h4>
              <p className="text-xs text-muted-foreground">{step.description}</p>
              <p className="mt-2 text-xs font-medium text-green-600">
                {step.location}
              </p>

              {/* Connector Line */}
              {idx < 5 && (
                <div className="absolute right-0 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-gradient-to-r from-green-400 to-transparent md:block lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Two Locations */}
      <div className="rounded-2xl bg-white p-8 ring-1 ring-green-100">
        <h3 className="mb-6 font-heading text-2xl font-bold text-foreground">
          {whyTwoLocationsTitle}
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                {farmerPartnershipTitle}
              </h4>
              <p className="text-sm text-muted-foreground">
                {farmerPartnershipDesc}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                {distributionExcellenceTitle}
              </h4>
              <p className="text-sm text-muted-foreground">
                {distributionExcellenceDesc}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                {strategicLocationTitle}
              </h4>
              <p className="text-sm text-muted-foreground">
                {strategicLocationDesc}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
              <ImageIcon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-foreground">
                {qualityConsistencyTitle}
              </h4>
              <p className="text-sm text-muted-foreground">
                {qualityConsistencyDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
