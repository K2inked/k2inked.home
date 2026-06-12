"use client";

import { Button } from "@/components/Button/Button";

// Klient-wrapper na Button (Button dołącza handlery onClick do DOM, więc nie
// może renderować się bezpośrednio w serwerowej stronie artysty).
export const BookingButton = ({
  href,
  name,
}: {
  href: string;
  name: string;
}) => (
  <Button
    as="a"
    variant="primary"
    href={href as `https://${string}`}
    ariaLabel={`Umów się do ${name} przez Instagram`}
  >
    Umów się do {name}
  </Button>
);
