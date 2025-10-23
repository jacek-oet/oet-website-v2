import React from 'react'
import type { Category, Icon, Project } from '@/payload-types'
import { Media } from '@/components/Media'
import Link from 'next/link'

export const ProjectCard: React.FC<{
  project: Project
}> = async ({ project }) => {
  const imageUrl = project.imageUrl

  return (
    <div className="flex flex-col items-start">
      {imageUrl && (
        <Media
          resource={imageUrl}
          className="border border-[#D9DCDA] border-b-0 object-cover w-full rounded-tl-3xl rounded-tr-3xl h-[217px] overflow-hidden"
        />
      )}
      <div className="p-6 border border-[#D9DCDA] rounded-bl-3xl rounded-br-3xl w-full">
        <h3 className="font-semibold text-lg mb-1 customTextState-size-h8 text-[#26372C] min-h-[60px] max-h-[60px] overflow-hidden line-clamp-3 text-ellipsis">
          {project.title}
        </h3>
        {project.subTitle && (
          <div className="customTextState-size-h9 text-[#26372CB2] min-h-[72px] max-h-[72px] overflow-hidden line-clamp-3 text-ellipsis">
            {project.subTitle}
          </div>
        )}
        <div className="flex items-center gap-2 text-xs text-gray-500 my-6">
          {project.categories && project.categories.length > 0 && (
            <div className="mt-2 gap-2 flex flex-wrap">
              {project.categories
                .filter(
                  (category): category is Category =>
                    typeof category === 'object' && category !== null,
                )
                .map((category, i) => (
                  <Link
                    key={i}
                    href={`/categories/${category.slug}`}
                    className="inline-block px-4 py-2 text-[#26372C] border border-gray-300 rounded-xl transition-colors"
                  >
                    {category.title}
                  </Link>
                ))}
            </div>
          )}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-poppins-x-small text-[#26372C] flex items-center justify-between"
          aria-label={`View details for project: ${project.title}`}
        >
          <span className="underline">View Project</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.4 12L9.4 18L8 16.6L12.6 12L8 7.4L9.4 6L15.4 12Z" fill="#26372C" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
