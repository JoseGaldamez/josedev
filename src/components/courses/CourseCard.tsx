"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  isExternal?: boolean;
  price?: string;
  discount?: string;
  level?: string;
  duration?: string;
}

export function CourseCard({
  title,
  description,
  image,
  link,
  isExternal = false,
  price,
  discount,
  level,
  duration,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col h-full">
        <a href={link} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>

      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        {discount && (
            <Badge className="absolute top-2 right-2 bg-red-600 hover:bg-red-700">
            {discount}
          </Badge>
        )}
      </div>
        </a>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#f2f2f2] mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm line-clamp-3 mb-4">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {level && (
            <Badge variant="outline" className="border-zinc-700 text-zinc-400">
              {level}
            </Badge>
          )}
          {duration && (
            <Badge variant="outline" className="border-zinc-700 text-zinc-400">
              {duration}
            </Badge>
          )}
        </div>

        <div className="mt-auto">
          {price && (
            <div className="mb-4">
              <p className="text-2xl font-bold text-green-500">{price}</p>
            </div>
          )}
          
          {isExternal ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Ver en Udemy
              </Button>
            </a>
          ) : (
            <Link href={link} className="w-full">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Ver curso gratuito
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
