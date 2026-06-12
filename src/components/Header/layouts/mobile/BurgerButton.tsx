import { IconBurger } from "@/icons/IconBurger";

type Props = {
    onClose: () => void
}

export const BurgerButton = ({onClose} : Props) => (
  <button
    type="button"
    onClick={onClose}
    aria-label="Zamknij menu"
    className="rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light/70"
  >
    <IconBurger className="w-5.5 transition duration-300 active:scale-110" />
  </button>
);
