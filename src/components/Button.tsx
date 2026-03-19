import Link from "next/link";
import clsx from "clsx";

type Props = {
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  href,
  onClick,
  variant = "solid",
  children,
  className,
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition active:translate-y-[1px]";

  const styles =
    variant === "solid"
      ? "bg-steel text-white hover:bg-steel2 shadow-sm"
      : "border border-steel text-steel hover:bg-cloud";

  const cn = clsx(base, styles, className);

  if (href) {
    return (
      {href}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn}>
      {children}
    </button>
  );
}
