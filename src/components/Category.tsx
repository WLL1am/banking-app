import Image from "next/image";

import { topCategoryStyles } from "../../constants";
import { cn } from "../../lib/utils";

import { Progress } from "./ui/progress";

const TOP_CATEGORY_STYLE_KEY_MAP: Record<
  string,
  keyof typeof topCategoryStyles
> = {
  FOOD_AND_DRINK: "Food and Drink",

  // Travel group
  TRAVEL: "Travel",
  TRANSPORTATION: "Travel",

  // Lifestyle group
  ENTERTAINMENT: "Lifestyle",
  GENERAL_MERCHANDISE: "Lifestyle",
  PERSONAL_CARE: "Lifestyle",

  // Essentials group
  RENT_AND_UTILITIES: "Essentials",
  HOME_IMPROVEMENT: "Essentials",
  MEDICAL: "Essentials",
  GENERAL_SERVICES: "Essentials",
  GOVERNMENT_AND_NON_PROFIT: "Essentials",

  // Financial group
  INCOME: "Financial",
  BANK_FEES: "Financial",
  LOAN_PAYMENTS: "Financial",
  LOAN_DISBURSEMENTS: "Financial",

  // Transfers
  TRANSFER_IN: "Transfer",
  TRANSFER_OUT: "Transfer",
};

const CATEGORY_LABEL_MAP: Record<string, string> = {
  FOOD_AND_DRINK: "Food and Drink",
  TRAVEL: "Travel",
  TRANSPORTATION: "Transportation",

  ENTERTAINMENT: "Entertainment",
  GENERAL_MERCHANDISE: "General Merchandise",
  PERSONAL_CARE: "Personal Care",

  RENT_AND_UTILITIES: "Rent and Utilities",
  HOME_IMPROVEMENT: "Home Improvement",
  MEDICAL: "Medical",
  GENERAL_SERVICES: "General Services",
  GOVERNMENT_AND_NON_PROFIT: "Government & Non-Profit",

  INCOME: "Income",
  BANK_FEES: "Bank Fees",
  LOAN_PAYMENTS: "Loan Payments",
  LOAN_DISBURSEMENTS: "Loan Disbursements",

  TRANSFER_IN: "Transfer In",
  TRANSFER_OUT: "Transfer Out",
};

const Category = ({ category }: CategoryProps) => {
  const styleKey =
    TOP_CATEGORY_STYLE_KEY_MAP[category.name] ||
    (category.name in topCategoryStyles
      ? (category.name as keyof typeof topCategoryStyles)
      : "default");
  const readableName =
    CATEGORY_LABEL_MAP[category.name] ||
    (category.name in topCategoryStyles ? category.name : "Other");

  const {
    bg,
    circleBg,
    text: { main, count },
    progress: { bg: progressBg, indicator },
    icon,
  } = topCategoryStyles[styleKey];

  return (
    <div className={cn("gap-[18px] flex p-4 rounded-xl", bg)}>
      <figure className={cn("flex-center size-10 rounded-full", circleBg)}>
        <Image src={icon} width={20} height={20} alt={readableName} />
      </figure>
      <div className="flex w-full flex-1 flex-col gap-2">
        <div className="text-14 flex justify-between">
          <h2 className={cn("font-medium", main)}>{readableName}</h2>
          <h3 className={cn("font-normal", count)}>{category.count}</h3>
        </div>
        <Progress
          value={(category.count / category.totalCount) * 100}
          className={cn("h-2 w-full", progressBg)}
          indicatorClassName={cn("h-2 w-full", indicator)}
        />
      </div>
    </div>
  );
};

export default Category;
