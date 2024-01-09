'use client'
import AnchorLink, { AnchorLinkProps } from 'react-anchor-link-smooth-scroll';
import React, {ReactNode} from "react";
import {cn} from "@/utils/helper";

interface IProps extends AnchorLinkProps{
  children: ReactNode,
  href: string,
  onClick?: () => void,
  linkType?: 'primary' | 'secondary' | 'link' | 'none'
  className?: string
}

const styled = {
  baseStyled: 'px-6 py-2 rounded-full inline-block text-sm cursor-pointer',
  primary: 'bg-zinc-100 text-zinc-900',
  secondary: 'border border-zinc-700 hover:bg-zinc-700',
  link: 'text-zinc-400 hover:text-zinc-50 hover:underline',
  none: 'px-0',
}

export function CustomLink({ children, linkType = 'primary', className, ...props }: IProps) {
  return <AnchorLink {...props} ref={null} className={cn(linkType !== 'link' && styled.baseStyled, styled[linkType], className)}>
    {children}
  </AnchorLink>
}