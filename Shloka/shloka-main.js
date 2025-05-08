const displayShlokas = [
    {
        shlok: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।',
        hindi: 'तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में नहीं।',
        english: 'You have the right to perform your actions, but not the right to the fruits of the actions.'
    },
    {
        shlok: 'योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।',
        hindi: 'हे धनञ्जय! आसक्ति को त्याग कर, योग में स्थित होकर कर्म करो।',
        english: 'O Dhananjaya, perform your duties established in yoga, renouncing attachment.'
    },
    {
        shlok: 'विद्या विनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।',
        hindi: 'विद्या और विनय से युक्त ब्राह्मण, गाय, हाथी में ज्ञानी एक समान दृष्टि रखता है।',
        english: 'A wise person sees a learned and humble Brahmin, a cow, an elephant equally.'
    },
    {
        shlok: 'न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः।',
        hindi: 'न तो मैं कभी नहीं था, न तुम और न ये राजा लोग कभी नहीं थे।',
        english: 'Never was there a time when I did not exist, nor you, nor all these kings.'
    },
    {
        shlok: 'वासांसि जीर्णानि यथा विहाय नवानि गृणाति नरोऽपराणि।',
        hindi: 'जैसे मनुष्य पुराने वस्त्रों को त्यागकर नए वस्त्र धारण करता है।',
        english: 'As a person casts off worn-out clothes and puts on new ones, so does the soul.'
    },
    {
        shlok: 'ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः।',
        hindi: 'जिनका अज्ञान आत्मज्ञान द्वारा नष्ट हो चुका है।',
        english: 'For those whose ignorance has been destroyed by knowledge of the Self.'
    },
    {
        shlok: 'उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।',
        hindi: 'मनुष्य को चाहिए कि अपने द्वारा अपने को ऊपर उठाए और कभी नीचा न गिराए।',
        english: 'Let a man lift himself by his own self and not degrade himself.'
    },
    {
        shlok: 'न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्।',
        hindi: 'कोई भी क्षणमात्र भी बिना कर्म किए नहीं रह सकता।',
        english: 'Indeed, no one can ever remain for even a moment without performing action.'
    },
    {
        shlok: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।',
        hindi: 'अपना धर्म दोषयुक्त होने पर भी परधर्म से श्रेष्ठ है।',
        english: 'Better is one’s own duty, though devoid of merit, than the duty of another well discharged.'
    },
    {
        shlok: 'अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम्।',
        hindi: 'अहिंसा, सत्य, क्रोध का न होना, त्याग, शांति और चुगली का अभाव।',
        english: 'Non-violence, truth, absence of anger, renunciation, tranquility, and absence of fault-finding.'
    },
    {
        shlok: 'मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।',
        hindi: 'मुझे स्मरण कर, मेरे भक्त बन, मेरी पूजा कर, मुझे नमस्कार कर।',
        english: 'Fix your mind on Me, be devoted to Me, sacrifice to Me, bow down to Me.'
    },
    {
        shlok: 'तत्र सत्त्वं निर्मलत्वात् प्रकाशकमनामयम्।',
        hindi: 'सत्त्वगुण निर्मल होने के कारण प्रकाश देने वाला और रोगरहित होता है।',
        english: 'Among them, sattva is pure and illuminating because of its stainless nature.'
    },
    {
        shlok: 'दुःखेष्वनुद्विग्नमना: सुखेषु विगतस्पृह:।',
        hindi: 'जो दुःखों में विचलित नहीं होता और सुखों में आसक्त नहीं होता।',
        english: 'One who is not disturbed in sorrow and not attached in happiness is a sage.'
    },
    {
        shlok: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।',
        hindi: 'सब धर्मों को छोड़कर मेरी शरण में आ जा।',
        english: 'Abandon all varieties of religion and simply surrender unto Me.'
    },
    {
        shlok: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।',
        hindi: 'जब-जब धर्म की हानि होती है, तब-तब मैं अवतार लेता हूँ।',
        english: 'Whenever there is decline in righteousness, I manifest Myself.'
    },
    {
        shlok: 'परित्राणाय साधूनां विनाशाय च दुष्कृताम्।',
        hindi: 'साधुओं की रक्षा और दुष्टों के विनाश के लिए मैं जन्म लेता हूँ।',
        english: 'For the protection of the good and the destruction of the wicked, I appear.'
    },
    {
        shlok: 'समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः।',
        hindi: 'मैं सब प्राणियों के प्रति समभाव रखता हूँ, न कोई मेरा शत्रु है, न प्रिय।',
        english: 'I am impartial to all beings; to Me no one is hateful or dear.'
    },
    {
        shlok: 'न जायते म्रियते वा कदाचिन् नायं भूत्वा भविता वा न भूयः।',
        hindi: 'आत्मा न कभी जन्म लेता है, न मरता है और न कभी नष्ट होता है।',
        english: 'The soul is never born and never dies; nor does it come into being again.'
    },
    {
        shlok: 'नैव किञ्चित्करोमीति युक्तो मन्येत तत्त्ववित्।',
        hindi: 'जो तत्त्व को जानता है वह समझता है कि "मैं कुछ नहीं करता।"',
        english: 'One who knows the truth thinks “I do nothing at all.”'
    },
    {
        shlok: 'सन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः।',
        hindi: 'जो सदा संतुष्ट रहता है, संयमी है और दृढ़ निश्चय वाला योगी है।',
        english: 'Always content, self-controlled, firm in determination – that yogi is dear to Me.'
    },
    {
        shlok: 'क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।',
        hindi: 'हे पार्थ! तू कायरता को प्राप्त मत हो, यह तुझसे उचित नहीं है।',
        english: 'O Partha, do not yield to unmanliness. It does not befit you.'
    },
    {
        shlok: 'न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।',
        hindi: 'इस संसार में ज्ञान के समान पवित्र कुछ भी नहीं है।',
        english: 'There is nothing as purifying in this world as knowledge.'
    },
    {
        shlok: 'ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।',
        hindi: 'जो व्यक्ति विषयों का चिन्तन करता है, उसमें उन विषयों की आसक्ति उत्पन्न होती है।',
        english: 'While contemplating objects, one develops attachment to them.'
    },
    {
        shlok: 'सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते।',
        hindi: 'आसक्ति से काम उत्पन्न होता है, और काम से क्रोध।',
        english: 'Attachment gives rise to desire, and desire leads to anger.'
    },
    {
        shlok: 'क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।',
        hindi: 'क्रोध से भ्रम उत्पन्न होता है, और भ्रम से स्मृति नष्ट होती है।',
        english: 'Anger leads to delusion, and delusion causes loss of memory.'
    },
    {
        shlok: 'स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात् प्रणश्यति।',
        hindi: 'स्मृति के नाश से बुद्धि का नाश होता है, और बुद्धि के नाश से मनुष्य विनष्ट हो जाता है।',
        english: 'Loss of memory ruins intellect, and with the destruction of intellect, one perishes.'
    },
    {
        shlok: 'तस्मादसक्तः सततं कार्यं कर्म समाचर।',
        hindi: 'इसलिए तू आसक्ति रहित होकर सतत अपने कर्तव्य कर्म का पालन कर।',
        english: 'Therefore, do your prescribed duty constantly without attachment.'
    },
    {
        shlok: 'श्रीभगवानुवाच: मय्यासक्तमना: पार्थ योगं युञ्जन्मदाश्रय:।',
        hindi: 'भगवान ने कहा: हे पार्थ! मन को मुझमें लगाकर और मेरे आश्रय में योग का अभ्यास कर।',
        english: 'The Blessed Lord said: O Partha, fix your mind on Me and practice yoga under My shelter.'
    },
    {
        shlok: 'त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवाजुर्न।',
        hindi: 'वेद त्रिगुणों के विषय में हैं; तू त्रिगुणों से रहित हो जा, हे अर्जुन।',
        english: 'The Vedas deal with the three modes; rise above these three, O Arjuna.'
    },
    {
        shlok: 'ब्राह्मणक्षत्रियविशां शूद्राणां च परन्तप। कर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणैः।',
        hindi: 'हे परंतप! ब्राह्मण, क्षत्रिय, वैश्य और शूद्रों के कर्म उनके स्वभाव से उत्पन्न गुणों के अनुसार विभाजित हैं।',
        english: 'O scorcher of foes, the duties of Brahmins, Kshatriyas, Vaishyas, and Shudras are divided according to qualities born of their own nature.'
    }
];

module.exports = displayShlokas