import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/Button"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

type PaginationButtonProps = {
  isActive?: boolean
} & React.ComponentProps<typeof Button>;

function PaginationButton({
  className,
  isActive,
  size = "icon",
  children,
  variant,
  ...props
}: PaginationButtonProps) {
  return (
    <Button
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={className}
      size={size}
      variant={variant || isActive ? "outline" : "ghost"}
      {...props}
    >
      {children}
    </Button>
  )
}

function PaginationPrevious({
  className,
  label,
  icon = () => <ChevronLeftIcon />,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { label?: string, icon?: () => React.ReactNode }) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      {icon()}
      {label ? <span className="hidden sm:block">{label}</span> : null}
    </PaginationLink>
  )
}

function PaginationPreviousButton({
  className,
  label,
  icon = () => <ChevronLeftIcon />,
  ...props
}: React.ComponentProps<typeof PaginationButton> & { label?: string, icon?: () => React.ReactNode }) {
  return (
    <PaginationButton
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      {icon()}
      {label ? <span className="hidden sm:block">{label}</span> : null}
    </PaginationButton>
  )
}

function PaginationNext({
  className,
  label,
  icon = () => <ChevronRightIcon />,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { label?: string, icon?: () => React.ReactNode }) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      {label ? <span className="hidden sm:block">{label}</span> : null}
      {icon()}
    </PaginationLink>
  )
}

function PaginationNextButton({
  className,
  label,
  icon = () => <ChevronRightIcon />,
  ...props
}: React.ComponentProps<typeof PaginationButton> & { label?: string, icon?: () => React.ReactNode }) {
  return (
    <PaginationButton
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      {label ? <span className="hidden sm:block">{label}</span> : null}
      {icon()}
    </PaginationButton>
  )
}

function PaginationEllipsis({
  className,
  label,
  icon = () => <MoreHorizontalIcon className="size-4" />,
  ...props
}: React.ComponentProps<"span"> & { label?: string, icon?: () => React.ReactNode }) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      {icon()}
      {label ? <span className="sr-only">{label}</span> : null}
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationButton,
  PaginationNextButton,
  PaginationPreviousButton,
}
