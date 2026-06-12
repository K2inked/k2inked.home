import Link from "next/link";
import type { MouseEventHandler } from "react";
import { cn } from "@/utils";
import { base, variants } from "./ButtonStyles";
import { ButtonAnimation } from "./ButtonAnimation";
import type {
  ButtonProps,
  ButtonFlavor,
  InternalAnchor,
  ExternalAnchor,
} from "./ButtonTypes";

const preventIfDisabledAnchor =
  (disabled?: boolean, handler?: MouseEventHandler<HTMLAnchorElement>) =>
  (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    handler?.(e);
  };

export const Button = (props: ButtonProps) => {
  const {
    children,
    ariaLabel,
    variant,
    className,
    as = "button",
    ...rest
  } = props;
  const cls = cn(base, variants[variant], className);

  const content = (
    <>
      <span className="relative z-10 text-center tracking-[0.15em]">
        {children}
      </span>
      <ButtonAnimation />
    </>
  );

  if (as === "a") {
    const { href, onClick, disabled, ...anchorProps } = rest as
      | InternalAnchor
      | ExternalAnchor;

    const isExternal =
      typeof href === "string" &&
      (href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:"));

    if (isExternal) {
      const isHttp = href.startsWith("http");
      return (
        <a
          href={href}
          onClick={preventIfDisabledAnchor(disabled, onClick)}
          className={cls}
          aria-disabled={disabled}
          data-disabled={disabled}
          aria-label={ariaLabel}
          {...(isHttp
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href as InternalAnchor["href"]}
        onClick={preventIfDisabledAnchor(disabled, onClick)}
        className={cls}
        aria-disabled={disabled}
        data-disabled={disabled}
        aria-label={ariaLabel}
        {...anchorProps}
      >
        {content}
      </Link>
    );
  }

  const {
    type = "button",
    onClick,
    disabled,
    ...buttonProps
  } = rest as ButtonFlavor;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      aria-label={ariaLabel}
      {...buttonProps}
    >
      {content}
    </button>
  );
};
