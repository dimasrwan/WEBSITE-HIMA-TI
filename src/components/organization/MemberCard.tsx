import React from "react";
import { Member } from "@/types";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="p-5 bg-[#111111]/85 backdrop-blur-sm border border-[#222225] rounded-xl flex flex-col justify-between group hover:-translate-y-1 hover:border-[#F97316]/60 hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)] transition-all duration-300">
      <div>

        <div className="flex items-center justify-between text-xs font-mono text-[#71717A] mb-3">
          <span>#{member.no.toString().padStart(2, "0")}</span>
          <span className="text-[#F97316] font-semibold">{member.nim}</span>
        </div>

        <h4 className="text-base font-bold text-[#F5F5F2] group-hover:text-[#F97316] transition-colors leading-snug mb-1">
          {member.name}
        </h4>

        <p className="text-xs font-medium text-[#A1A1AA] leading-normal mb-4">
          {member.role}
        </p>
      </div>

      <div className="pt-3 border-t border-[#222225] text-[11px] font-mono text-[#71717A] flex items-center justify-between">
        <span>Teknologi Informasi</span>
        <span className="text-[#A1A1AA]">FST UINAR</span>
      </div>
    </div>
  );
}
