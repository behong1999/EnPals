import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-primary", "hover:bg-primary-700", "text-gray-100"],
      ghost: ["hover:bg-primary-100"],
      dark: ["bg-primary-900", "hover:bg-700", "text-gray-100"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type Props = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

const Button = ({ variant, size, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
};

export default Button;
