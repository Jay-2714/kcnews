import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-700" translate="no">
        आमच्याबद्दल
      </h1>
      
      <div className="space-y-6 text-gray-700" translate="no">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-600">
            मराठी जनतेचे कलियुग चक्र
          </h2>
          <p className="text-lg leading-relaxed">
            मराठी जनतेचे कलियुग चक्र ही एक आधुनिक बातमी वेबसाइट आहे जी मराठी भाषिकांना 
            ताज्या आणि महत्वाच्या बातम्या पोहोचवण्याचे काम करते. आमचे उद्दिष्ट मराठी समाजाला 
            प्रत्येक क्षेत्रातील गुणवत्तापूर्ण माहिती उपलब्ध करून देणे आहे.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-red-600">
            आमचे ध्येय
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>मराठी भाषेत गुणवत्तापूर्ण बातम्या प्रसारित करणे</li>
            <li>समाजातील सर्व स्तरांपर्यंत माहिती पोहोचवणे</li>
            <li>सत्य आणि निष्पक्ष पत्रकारितेचा आदर्श ठेवणे</li>
            <li>मराठी संस्कृतीला जपणे आणि जगाला ओळखवणे</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-red-600">
            आमची वैशिष्ट्ये
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">ताज्या बातम्या</h4>
              <p>दिवसभरातील सर्वात महत्वाच्या घडामोडी</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">व्हिडिओ बातम्या</h4>
              <p>दृश्य-श्राव्य माध्यमातून बातम्यांचे सादरीकरण</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">विश्वासार्हता</h4>
              <p>सत्यापित आणि तपासून पाहिलेल्या बातम्या</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">सुलभ वाचन</h4>
              <p>सोप्या आणि समजण्याजोग्या भाषेत बातम्या</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-red-600">
            संपर्क साधा
          </h3>
          <p className="text-lg">
            आमच्याशी संपर्क साधण्यासाठी आपण आमच्या संपर्क पानावर भेट देऊ शकता. 
            आपल्या सूचना आणि प्रतिक्रिया आम्हाला महत्वाच्या आहेत.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;