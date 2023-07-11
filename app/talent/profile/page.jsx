'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import TalentProfileForm from '@components/authorized/Talent/ProfileForm';
import TalentProfileData from '@components/authorized/Talent/TalentProfileData';

export default function TalentProfileInfo () {
  const [isEditMode, setIsEditMode] = useState(false);

  const router = useRouter();
  const handleEditClick = () => {
    setIsEditMode(true);
    router.push('/talent/profile-form');
  };

  return (
    <div >
      {isEditMode ? (
        <TalentProfileForm />
      ) : (
        <TalentProfileData handleEditClick={handleEditClick} />
      )}
    </div>
  );
};