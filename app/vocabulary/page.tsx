import VocabularyList from '@/components/VocabularyList'
import React from 'react'

const VocabularyPage = () => {
  return (
    <div className="max-w-7xl py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 px-4 lg:px-0">
          <span className="text-[#f50057]"> WordWonders</span> - Ingliz tili
          so&apos;zlarini osonlik bilan eslab qoling.
        </h1>
      </div>
      <VocabularyList />
    </div>
  );
}

export default VocabularyPage