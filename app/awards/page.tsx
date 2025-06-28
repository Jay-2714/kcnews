import React from 'react';
import { FaTrophy, FaMedal, FaStar, FaAward } from 'react-icons/fa';

const Awards = () => {
  const awards = [
    {
      year: '2024',
      title: 'सर्वोत्कृष्ट डिजिटल न्यूज पोर्टल',
      organization: 'महाराष्ट्र पत्रकार संघ',
      description: 'मराठी भाषेतील बातम्यांच्या गुणवत्तेसाठी मिळालेला गौरव',
      icon: <FaTrophy className="text-yellow-500 text-4xl" />
    },
    {
      year: '2023',
      title: 'जनता चॉइस अवॉर्ड',
      organization: 'डिजिटल मीडिया असोसिएशन',
      description: 'वाचकांच्या मतदानातून मिळालेला सन्मान',
      icon: <FaMedal className="text-silver text-4xl" style={{ color: '#C0C0C0' }} />
    },
    {
      year: '2023',
      title: 'इनोव्हेटिव्ह जर्नलिझम अवॉर्ड',
      organization: 'इंडियन न्यूज ब्रॉडकास्टर्स असोसिएशन',
      description: 'नाविन्यपूर्ण पत्रकारितेसाठी मिळालेला पुरस्कार',
      icon: <FaStar className="text-blue-500 text-4xl" />
    },
    {
      year: '2022',
      title: 'बेस्ट रीजनल न्यूज वेबसाइट',
      organization: 'नेशनल डिजिटल अवॉर्ड्स',
      description: 'प्रादेशिक बातम्यांमध्ये उत्कृष्टतेसाठी',
      icon: <FaAward className="text-bronze text-4xl" style={{ color: '#CD7F32' }} />
    }
  ];

  const achievements = [
    {
      number: '10,00,000+',
      label: 'मासिक वाचक',
      description: 'आमच्या वेबसाइटवर दरमहा येणारे वाचक'
    },
    {
      number: '5,00,000+',
      label: 'सोशल फॉलोअर्स',
      description: 'सर्व सोशल मीडिया प्लॅटफॉर्मवर एकूण फॉलोअर्स'
    },
    {
      number: '50,000+',
      label: 'प्रकाशित बातम्या',
      description: 'आजपर्यंत प्रकाशित केलेल्या बातम्यांची संख्या'
    },
    {
      number: '99.8%',
      label: 'सत्यता दर',
      description: 'आमच्या बातम्यांची सत्यता आणि विश्वासार्हता'
    }
  ];

  const recognitions = [
    'मराठी भाषेतील सर्वात जलद बातम्या पोहोचवणारी वेबसाइट',
    'तरुणांमध्ये सर्वाधिक लोकप्रिय न्यूज प्लॅटफॉर्म',
    'सामाजिक मुद्द्यांवरील उत्कृष्ट कव्हरेजसाठी प्रसिद्ध',
    'डिजिटल पत्रकारितेतील अग्रणी भूमिका',
    'ग्रामीण भागातील बातम्यांचे उत्तम प्रतिनिधित्व'
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-700" translate="no">
        पुरस्कार आणि सन्मान
      </h1>
      
      {/* Awards Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-red-600" translate="no">
          मिळालेले पुरस्कार
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {award.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">{award.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2" translate="no">
                    {award.title}
                  </h3>
                  <p className="text-sm font-medium text-red-600 mb-2" translate="no">
                    {award.organization}
                  </p>
                  <p className="text-gray-700 text-sm" translate="no">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-red-600" translate="no">
          आमची यशोगाथा
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-red-700 mb-2">
                {achievement.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2" translate="no">
                {achievement.label}
              </h3>
              <p className="text-gray-600 text-sm" translate="no">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-red-600" translate="no">
          मान्यता आणि ओळख
        </h2>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <ul className="space-y-4">
            {recognitions.map((recognition, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-gray-700" translate="no">{recognition}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vision Section */}
      <section>
        <div className="bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-lg text-white text-center">
          <h2 className="text-3xl font-bold mb-4" translate="no">
            आमचे भविष्यातील उद्दिष्ट
          </h2>
          <p className="text-lg max-w-3xl mx-auto" translate="no">
            मराठी पत्रकारितेत आणखी नवीन मानदंड स्थापन करणे आणि तंत्रज्ञानाचा वापर करून 
            अधिकाधिक लोकांपर्यंत सत्य आणि विश्वासार्ह माहिती पोहोचवणे हे आमचे भविष्यातील उद्दिष्ट आहे.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Awards;