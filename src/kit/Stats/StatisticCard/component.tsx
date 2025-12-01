import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Card } from "@/components";

export type StatisticCardIcon = React.ComponentType<{ className?: string }>;

export type StatisticCardProps = {
  className?: string;
  title: string;
  titleClassName?: string;
  value: ReactNode;
  valueClassName?: string;
  valueDescription?: ReactNode;
  valueDescriptionClassName?: string;
  label?: ReactNode;
  labelClassName?: string;
  labelIcon?: StatisticCardIcon;
  labelIconClassName?: string;
  description?: string;
  icon?: StatisticCardIcon;
  iconClassName?: string;
  badge?: ReactNode;
  badgeClassName?: string;
  badgeLeftIcon?: StatisticCardIcon;
  badgeRightIcon?: StatisticCardIcon;
  children: ReactNode;
};

export const StatisticCard = ({ 
  className,
  title,
  titleClassName,
  value,
  valueClassName,
  valueDescription,
  valueDescriptionClassName,
  label,
  labelClassName,
  labelIcon: LabelIcon,
  labelIconClassName,
  description,
  icon: Icon,
  iconClassName,
  badge,
  badgeClassName,
  badgeLeftIcon: BadgeLeftIcon,
  badgeRightIcon: BadgeRightIcon,
  children,
}: StatisticCardProps) => {
  return (
    <Card className={cn("flex flex-col gap-2 md:p-6", className)}>
      <header className="flex flex-col gap-3">
        <section className="flex gap-2 justify-between">
          <div className="flex flex-col gap-1">
            <h3 className={cn("text-sm text-muted-foreground", titleClassName)}>
              {title}
            </h3>
            <div className="flex items-end gap-1">
              <span className={cn("text-2xl font-semibold", valueClassName)}>
                {value}
              </span>
              {valueDescription ? (
                <p className={cn("text-xs text-muted-foreground pb-0.5", valueDescriptionClassName)}>
                  {valueDescription}
                </p>
              ) : null}
            </div>
          </div>
          {Icon || badge ? (
            <div className="flex flex-col-reverse sm:flex-row items-end sm:items-center gap-2 sm:gap-1 h-fit">
              {badge ? (
                <div className={cn("border flex gap-1 sm:gap-2 items-center text-xs h-fit py-1 px-2 rounded-full", badgeClassName)}>
                  {BadgeLeftIcon ? <BadgeLeftIcon className="size-3" /> : null}
                  {badge}
                  {BadgeRightIcon ? <BadgeRightIcon className="size-3" /> : null}
                </div>
              ) : null}
              {Icon ? <Icon className={cn("size-5", iconClassName)} /> : null}
            </div>
        ) : null}
        </section>
        {label || description ? (
          <section className="flex flex-col gap-1">
          {label ? (
            <p className={cn("flex gap-2 items-center text-sm", labelClassName)}>
              {label}
              {LabelIcon ? <LabelIcon className={cn("size-4", labelIconClassName)} /> : null}
            </p>
          ) : null}
          {description ? (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          ) : null}
        </section>
        ) : null}
      </header>
      {children}
    </Card>
  );
};