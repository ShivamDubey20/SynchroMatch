import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

//variants basically has properties you want to pass
export const paragraphVariants = cva(
  'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg',
        sm: 'text-sm sm:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

// cause of this whenever we render paragraph we can see all the props a paragraph element in html can normally get
interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

//forwardRef it is link to dome node . We have passed two generics here .
const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}>
        {children}
      </p>
    )
  }
)

Paragraph.displayName = 'Paragraph'
//used for debugging purposes

export default Paragraph
