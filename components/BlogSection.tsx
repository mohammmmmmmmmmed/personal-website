import React from "react";
import Image from "next/image";

const BlogSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Resources
      </h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        A compilation of articles that I've produced over the years.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          Talks
        </h2>
        <hr className="mb-8" />

        {/* Andrew Tate Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="tate">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Emory Andrew Tate III: Provoking Laughter Amidst the Theatrics of Exaggerated Masculinity
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">/2023</p>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="mb-4">
                In the vast expanse of cyberspace where an inquisitive search on "how to be a man" yields an overwhelming 130 million hits and over 12 million videos, one charismatic and peculiar persona looms large: Emory Andrew Tate III. Crowned as the most Googled public figure in 2022, Tate's ascent to infamy was abruptly halted when he was banished from multiple platforms amid accusations of fervently espousing extreme misogynistic viewpoints. Moreover, concerns abound regarding his role as a catalyst for radicalizing impressionable young men and endorsing the doctrine of male supremacy, leaving parents, educators, and observers deeply unsettled about the profound impact he wields on conceptions of masculinity.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">A Complex Provenance</h4>
              <p className="mb-4">
                Born in the United States, Emory Andrew Tate III was reared in the United Kingdom, embarking on a career as a kickboxer before garnering notoriety as a contestant on the cultural phenomenon known as Big Brother in 2016. However, his expulsion from the show following the emergence of a distressing video depicting Tate striking a woman with a belt on grounds of domestic abuse precipitated a contentious discourse.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">The Lure of Social Media Stardom</h4>
              <p className="mb-4">
                Not unlike numerous denizens of reality television, Emory Andrew Tate III's tenure in the limelight swiftly transitioned to digital eminence. Astutely marketing an enviable lifestyle replete with opulent automobiles, private jets, exquisite cigars, and alluring women, Tate has zealously championed a traditional paradigm of masculinity. Exploiting the archetypes of male protector, provider, and patriarch, he passionately extols conspicuous consumption as emblematic of male prowess.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">The Fall from Social Media Grace</h4>
              <p className="mb-4">
                In the wake of mounting condemnation, the social media platforms that once provided a fertile ground for Emory Andrew Tate III's rhetoric acted swiftly, expunging him from their realms of virtual connectivity. Instagram, TikTok, Facebook, and YouTube all imposed bans on Tate, leaving him to fend off allegations of misogyny.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">The Ramifications of Radicalization</h4>
              <p className="mb-4">
                The tentacles of Emory Andrew Tate III's influence extend beyond the realms of empowerment, intertwining with the dangerous tendrils of radicalization. Alas, his purported empowerment of young men is acutely criticized as a process of indoctrination, coercing adherents into adopting regressive mindsets.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">The Allegations Unveiled</h4>
              <p className="mb-4">
                Recent developments have thrust the controversial internet personality into an even darker spotlight. The Bucharest court ruling on Friday has determined that Tate will remain under house arrest in Romania for an additional 30 days, pending trial on charges of human trafficking. Alongside his brother Tristan and two Romanian female suspects, Tate stands accused of grave offenses, including rape, forming a criminal gang to sexually exploit women, and engaging in human trafficking.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-start">
            <a href="https://www.instagram.com/p/CuyUrR-pJId/?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/img/talks/tate.jpeg"
                alt="Andrew Tate Article"
                width={400}
                height={300}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </a>
          </div>
        </div>

        {/* Terry Crews Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="terry">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Terry Crews: Speaking Up
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">/2023</p>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="mb-4">
                "I got grabbed and fondled by my record company executive, my wife just watched. When I said something about it, I was blackballed." - Terry Crews.
              </p>
              
              <p className="mb-4">
                In 2016, Terry Crews was sexually assaulted by a Hollywood executive at a party. The perpetrator groped crews in front of his wife, and despite feeling shocked and violated, Crews did not retaliate physically. Instead, he chose to speak out publicly about the assault and advocate for survivors of sexual violence.
              </p>
              
              <p className="mb-4">
                "Lol, what the f*** is going on out here man? Terry: I froze in fear. They would have had to take me to jail. Get the strap."
              </p>
              
              <p className="mb-4">
                In response to Terry Crews' revelation of sexual assault, 50 Cent made insensitive comments on social media, suggesting that Crews was weak for not physically retaliating against his attacker. These comments were widely criticized and viewed as dismissive of the trauma and complexity of sexual assault survivors.
              </p>
              
              <p className="mb-4">
                "It's not weak to be a survivor of assault. It takes incredible strength to speak out about it. Shame on you, 50 Cent, for trying to make light of Terry Crews' experience." - Tarana Burke, founder of the #metoo movement.
              </p>
              
              <p className="mb-4">
                "50 cent's comments perpetuate toxic masculinity and reinforce harmful stereotypes about sexual assault. We need to do better as a society to support survivors and break the cycle of violence." - Joe Biden, former vice president of the United States, current president of the United States.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-start">
            <a href="https://www.instagram.com/p/CwPs9F1rwku/?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/img/talks/terry.jpeg"
                alt="Terry Crews Article"
                width={400}
                height={300}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </a>
          </div>
        </div>

        {/* Manipur Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="manipur">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Manipur is Burning
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">/2023</p>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="mb-4">
                Since May 3, Manipur has been marred by violent inter-ethnic clashes between the Meitei and Kuki communities. Among the distressing incidents that emerged from this conflict is the heart-wrenching ordeal faced by two Kuki women. They were paraded naked and sexually assaulted by a mob of men on may 4, which remained hidden until it came to light on July 19, in Kangpokpi district.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">Betrayal by the police</h4>
              <p className="mb-4">
                The survivors' harrowing experience becomes even more distressing due to the betrayal of the police. Seeking shelter in a police jeep parked on the main road, the women and the younger woman's brother hoped for protection. Shockingly, instead of safeguarding them, the police handed them over to the mob, leaving them defenseless against the mob's brutality.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">Cry for justice</h4>
              <p className="mb-4">
                The incident came to light through a viral video on july 19, sparking widespread outrage. The ferocious mob surrounded the women, tearing at their clothes, and subjecting them to physical and sexual assault. In broad daylight, the women were paraded around town naked, enduring the humiliation of being groped by the mob. For a horrifying two hours, the women were raped by different groups of men, while their pleas for mercy fell on deaf ears.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">Political incompetence</h4>
              <p className="mb-4">
                The handling of the Manipur riots by the political authorities has been marred by incompetence. On July 20, Prime Minister Narendra Modi finally responded to the distressing incident where two Kuki women were sexually assaulted during the violent clashes, promising that "the guilty will not be spared." However, the delay in announcing arrests, 64 days after the incident, raises serious concerns about the government's ability to ensure timely justice.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-start">
            <a href="https://www.instagram.com/p/CvKqs_fxWm-/?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/img/talks/manipur.jpeg"
                alt="Manipur Article"
                width={400}
                height={300}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </a>
          </div>
        </div>

        {/* Ripple Effect Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="ripple">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Exploring the longterm consequences of sexual abuse
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">/2023</p>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <h4 className="text-lg font-semibold mb-2">PSYCHOLOGICAL AND EMOTIONAL IMPACT</h4>
                  <p>Survivors of sexual abuse may experience a range of psychological and emotional effects, such as depression, anxiety, post-traumatic stress disorder (PTSD), low self-esteem, guilt, shame, and difficulties in trust and forming healthy relationships.</p>
                </li>
                <li>
                  <h4 className="text-lg font-semibold mb-2">PHYSICAL CONSEQUENCES</h4>
                  <p>Sexual abuse can have physical consequences, including chronic pain, sexual dysfunction, gynecological or urological issues, and increased vulnerability to physical health problems due to coping mechanisms like substance abuse or self-harm.</p>
                </li>
                <li>
                  <h4 className="text-lg font-semibold mb-2">IMPACT ON RELATIONSHIPS</h4>
                  <p>Survivors of sexual abuse may struggle with establishing and maintaining healthy relationships. Difficulties with trust, intimacy, and vulnerability can affect friendships, romantic partnerships, and familial bonds.</p>
                </li>
                <li>
                  <h4 className="text-lg font-semibold mb-2">DISSOCIATION AND DISCONNECTION</h4>
                  <p>Some survivors may develop dissociative tendencies, detaching from their emotions or their sense of self as a way to cope with the trauma. This disconnection can affect their overall well-being and engagement with the world around them.</p>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="flex justify-center items-start">
            <a href="https://www.instagram.com/p/Cp5gBG5P-Ew/?igsh=MTc4MmM1YmI2Ng==" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/img/talks/ripple.jpeg"
                alt="Ripple Effect Article"
                width={400}
                height={300}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </a>
          </div>
        </div>

        {/* Ulhasnagar Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="ulhasnagar">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Man allegedly kills his 12-year-old sister after mistaking her period stains for an 'affair'
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">/2023</p>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="mb-4">
                In what can only be described as a mind-numbing atrocity, a 12-year-old girl was tortured and murdered by her 30-year-old brother in Ulhasnagar, Thane, out of suspicion of having an affair. The victim endured four days of torture before succumbing to severe wounds.
              </p>
              
              <p className="mb-4">
                This incident reminds us of the urgent need for comprehensive sexual and menstrual health education. Even in 2023, discussions about menstruation and sexual activity remain private. Despite increased discourse, the enduring stigma surrounding these topics persists, leading to tragic acts like this. It is crucial to collectively eradicate this stigma and foster open, informed discussions to prevent future occurrences.
              </p>
              
              <p className="mb-4">
                The world needs to wake up! We need to inform and empower every nook and cranny of the nation to make sure that no child faces the same brutal jeopardy as this innocent 12-year-old did.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-start">
            <a href="https://www.instagram.com/p/CsG6ZWUPnHW/?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/img/talks/ulhasnagar.jpeg"
                alt="Ulhasnagar Article"
                width={400}
                height={300}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </a>
          </div>
        </div>

        {/* Dalai Lama Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="dalai">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              A greeting lost in translation, or, exploitation of authority?
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">/2023</p>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="mb-4">
                The 14th Dalai Lama, Tenzin Gyatso, is a highly respected spiritual leader and Nobel Peace Prize laureate, yet his public image has been marred by controversy throughout his life. The most recent scandal, which emerged in February 2023, involved a video of the Dalai Lama kissing a young boy on the lips and asking him to "suck my tongue," which caused widespread outrage. While this incident is deeply concerning on its own, it is just one example of a pattern of problematic behavior throughout the Dalai Lama's tenure.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">The Video</h4>
              <p className="mb-4">
                The emergence of a video in February 2023, showing the Dalai Lama kissing a young boy on the lips and asking him to "suck my tongue," has ignited a firestorm of controversy on social media. Many people have condemned his behavior as "abusive," "disgusting," and "scandalous." In response, the Dalai Lama's office issued an apology, claiming that his actions were intended to be "innocent and playful."
              </p>
              
              <h4 className="text-lg font-semibold mb-2">Controversial Remarks on African Refugees</h4>
              <p className="mb-4">
                In 2015, the Dalai Lama stirred controversy when he expressed the opinion that Europe should only accept "a limited number" of African refugees and that they should eventually return to their home countries. This comment was met with widespread criticism, with many accusing him of advocating for discriminatory policies.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">Controversial Remarks on Female Succession</h4>
              <p className="mb-4">
                In 2011, the Dalai Lama made remarks that drew criticism when he suggested that any female successor to his role as spiritual leader would need to be "very, very attractive" in order to be effective. Many saw this as evidence of gender bias and objectification of women.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-start">
            <a href="https://www.instagram.com/p/CrTQpmQLuDX/?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/img/talks/dalai.jpeg"
                alt="Dalai Lama Article"
                width={400}
                height={300}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </a>
          </div>
        </div>

        {/* CSA Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="csa">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Child Sexual Abuse: Some recent cases
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">/2023</p>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h4 className="text-lg font-semibold mb-2">Introduction</h4>
              <p className="mb-4">
                Child sexual abuse (CSA) is a serious issue in India that often goes unreported and unaddressed. It can have long-lasting effects on the physical, emotional, and mental health of the child. It is important to create awareness about this issue.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">Statistics</h4>
              <p className="mb-4">
                32,608 cases of child rape were reported in India in 2017, an 82% increase from 2016. However, many cases of CSA go unreported, and these statistics may not accurately represent the scope of the problem.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">Asifa Bano Case</h4>
              <p className="mb-4">
                In 2018, an 8-year-old girl named Asifa Bano was raped and killed in Kathua, Jammu & Kashmir, igniting outrage across the country and calls for justice. The incident highlighted the requirement for more stringent regulations and improved child protection in India. A contentious book that examines the issue is "The Girl from Kathua: A Sacrificial Victim of Ghazwa-e-Hind" by Indian professor Madhu Kishwar.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">Dalai Lama Case</h4>
              <p className="mb-4">
                In February 2023, a video of the Dalai Lama kissing a young boy on the lips and asking him to suck his tongue surfaced, raising concerns about possible child abuse. While Tibetan activists have argued that it was an innocent joke, many have condemned the conduct as inappropriate and unacceptable.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-start">
            <a href="https://www.instagram.com/p/CrL3mvJvVLo/?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/img/talks/csa.jpeg"
                alt="CSA Article"
                width={400}
                height={300}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </a>
          </div>
        </div>

        {/* Bilkis Bano Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="bilkis">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Bilkis Bano: How India Failed sexual abuse survivors
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">/2023</p>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h4 className="text-lg font-semibold mb-2">Who</h4>
              <p className="mb-4">
                Bilkis Bano, a young Muslim woman, was just 19 years old when she was gang-raped by a group of men during the 2002 Gujarat riots in India. The attack left her traumatized and deeply affected her life. However, despite the overwhelming evidence, it took Bilkis 17 years to see justice served. In 2019, the Supreme Court of India finally convicted the accused and upheld Bilkis' plea for compensation. The landmark ruling not only brought closure to Bilkis, but it also set a precedent for holding perpetrators of communal violence accountable.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">That is, until</h4>
              <p className="mb-4">
                The Indian government led by Prime Minister Narendra Modi approved the early release of the 11 men who took part in Bilkis' ordeal and were convicted and sentenced to life in prison. The approval letter was uploaded on social media by legal site The Leaflet, and was signed by Modi's close aide Amit Shah, who heads the Ministry of Home Affairs. The men were released in August 2022 and their subsequent felicitation by right-wing activists caused outrage. Bilkis Bano expressed her shock and disbelief at the decision.
              </p>
              
              <h4 className="text-lg font-semibold mb-2">The aftermath</h4>
              <p className="mb-4">
                The Chief Justice of India announced that a special bench will be formed to hear a plea against the Gujarat government's decision to grant early release to the convicts in the Bilkis Bano case. The plea argues that the convicts should not be granted early release because they have not served their full sentences and because of the severity of the crime committed. The Supreme Court had previously upheld the life sentences of the convicts in 2017.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-start">
            <a href="https://www.instagram.com/p/CrBjYsPrwMr/?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/img/talks/bilkis.jpeg"
                alt="Bilkis Bano Article"
                width={400}
                height={300}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </a>
          </div>
        </div>

        {/* Monthly News Roundup */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Monthly news round up for the month of March
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">/2023</p>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h4 className="text-lg font-semibold mb-2">Safe to be a woman</h4>
            <p className="mb-4">
              India's UN envoy, Ruchira Kamboj, said that it is the best time to be a woman in India today, highlighting the government's commitment to empowering women at all levels. During a high-level panel discussion at the United Nations on 19th March 2023, Kamboj emphasised the transformational capacity of technology in providing impetus to women's empowerment and sustainable development, citing various citizen-centric digital initiatives that have enabled access to finance, credit, technology and employment for women.
            </p>
            
            <p className="mb-4">
              In other news, a video surfaced on March 19, 2023, showing a girl being abducted by 2-3 occupants of a car in Outer Delhi. The Delhi Police have cracked the case and arrested the accused, who turned out to be her relatives.
            </p>
            
            <h4 className="text-lg font-semibold mb-2">New developments in the Hathras case</h4>
            <p className="mb-4">
              A special court in Hathras has acquitted three out of four accused persons and convicted one person for culpable homicide not amounting to murder in the rape and murder case of a 19-year-old Dalit girl. The convicted, Sandeep Sisodia, was sentenced to life imprisonment, while the other accused were acquitted due to a lack of evidence. The victim's family is likely to challenge the verdict in the Allahabad High Court, as the accused were not charged with rape or murder.
            </p>
            
            <h4 className="text-lg font-semibold mb-2">New developments in the Bilkis Bano case</h4>
            <p className="mb-4">
              The Supreme Court of India has sought a response from the Centre and the Gujarat government on a plea against the early release of 11 convicts in the Bilkis Bano gang-rape case. Bilkis Bano was gang-raped and her three-year-old daughter was killed by a mob in Gujarat's Dahod district during the 2002 riots. The 11 convicts were released on August 15 last year under the Gujarat government's remission policy, which has been challenged by Bilkis Bano.
            </p>
            
            <h4 className="text-lg font-semibold mb-2">Casteism at IITs</h4>
            <p className="mb-4">
              Dalit student Darshan Solanki committed suicide at IIT Bombay, allegedly due to caste discrimination. An internal investigation committee found no evidence of direct caste-based discrimination, attributing Darshan's suicide to his deteriorating academic performance. Darshan faced hostility from classmates after revealing his Scheduled Caste community status, and many students from Dalit, tribal, and backward or Muslim communities have died by suicide in higher education institutions across India.
            </p>
            
            <h4 className="text-lg font-semibold mb-2">Men's rights activists threaten hunger strike against marital rape PIL in SC</h4>
            <p className="mb-4">
              As an organization dedicated to gender equality, we cannot turn a blind eye to the issue of marital rape in India. Despite being recognized as a criminal offense by many countries, including India, marital rape continues to be a taboo topic that is often ignored or denied. It is a violation of a woman's bodily autonomy and a gross violation of her human rights.
            </p>
            
            <p className="mb-4">
              We believe that awareness and education are key to ending this practice. We have shared resources on our page, including a live discussion and a post, to help our followers understand the impact of marital rape and how we can work together to address it. We urge our community to stand with us in the fight against gender-based violence and to use their voices to support survivors of marital rape. Together, we can make a difference.
            </p>
          </div>
        </div>

        {/* Consent Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="consent">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Consent? Many husbands only hear "yes".
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">/2023</p>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="mb-4">
                Marital rape is a serious issue in India that remains largely unrecognized. Despite several attempts to criminalize marital rape, the country's legal system still doesn't recognize it as a crime. Many people in India believe that a husband has the right to engage in sex with his wife, regardless of her consent. This belief is reinforced by the deeply ingrained societal norms and gender roles that perpetuate the idea of male dominance and female submission.
              </p>
              
              <p className="mb-4">
                Last year, an NGO argued before the Delhi High Court that the lack of recognition of marital rape as a crime violates the fundamental rights of women. On May 11, 2021, the Delhi High Court gave a split verdict on the issue. Justice Rajiv Shakdher, one of the two judge who heard the matter, favoured the criminalisation of marital rape. Justice Hari Shankar held otherwise. Owing to the difference of views between the HC Bench, the matter reached the Supreme Court and is expected to be heard on May 9.
              </p>
              
              <p className="mb-4">
                One of the key arguments that is anticipated is the issue of consent and whether or not a woman's consent is necessary for sexual activity within marriage. The Apex Court's approach to this issue will be crucial in determining criminalisation of marital rape in India.
              </p>
              
              <p className="mb-4">
                We, at Spotlight believe that recognizing marital rape as a crime is long overdue in India. Women should have the right to say no to sexual activity within marriage, just as they do outside of marriage. This issue requires a multi-faceted approach that includes educating people on their sexual health and rights, as well as a shift in attitudes towards gender roles and sexuality. It's time for India to take action to create a society that values consent and empowers women to make their own choices about their bodies and sexuality.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-start">
            <a href="https://www.instagram.com/p/CqF8kgGLj0X/?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/img/talks/consent.jpeg"
                alt="Consent Article"
                width={400}
                height={300}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </a>
          </div>
        </div>

        {/* Brendan Fraser Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" id="brendan">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              While everyone celebrates Brendan Fraser's "career comeback".... Do you know why he left in the first place?
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">/2023</p>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="mb-4">
                Brendan Fraser, a well-known actor, is one of the many survivors who have come forward to share their experiences with the public. It is crucial to support survivors of sexual assault and to provide them with the resources and care they need to heal and recover from the trauma they have endured.
              </p>
              
              <p className="mb-4">
                In 2003, Brendan Fraser was sexually assaulted by Philip Berk, a former president of the Hollywood Foreign Press Association. The incident occurred at a luncheon in the presence of other industry members. Fraser reported the assault to his family, friends, and some of his colleagues, but he chose not to go public with the story at the time. Fraser later revealed in an interview with GQ that the assault had a profound impact on him, and that he experienced depression and anxiety as a result. He also spoke about how the incident affected his career, saying that he believed his career suffered as a result of his decision not to speak out about the assault.
              </p>
              
              <p className="mb-4">
                Fraser's experience is unfortunately all too common in the entertainment industry, where power dynamics can often make it difficult for survivors to come forward. Many survivors fear that they will face repercussions or retaliation for speaking out, and some may feel ashamed or blame themselves for the assault. Despite the severity of the abuse Fraser experienced, his story was met with skepticism and criticism from some corners of the industry. Some suggested that he was exaggerating or seeking attention, while others implied that he should have just "sucked it up" and continued working.
              </p>
              
              <p className="mb-4">
                Male survivors of sexual abuse may experience a range of emotions, such as shame, guilt, anger, and confusion. It's equally important to not make light of men speaking out against SA and support them in seeking help from loved ones, friends, or mental health professionals to help them process their experiences and heal.
              </p>
              
              <p className="mb-4">
                Here are a few examples of quotes from individuals expressing support for Brendan Fraser and condemning the mistreatment he experienced in Hollywood:
              </p>
              
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>"Brendan Fraser's story is a powerful reminder that the entertainment industry needs to do better to protect and support its actors. It takes immense courage to speak out against mistreatment, and we should all listen to and believe survivors." - Reese Witherspoon, actress and producer.</li>
                <li>"Brendan Fraser is a talented actor who deserved better. No one should be subjected to harassment or abuse, and we need to work together to create a culture where everyone is safe and respected." - Alyssa Milano, actress and #MeToo activist.</li>
                <li>"Brendan Fraser's story is heartbreaking, but unfortunately all too common in Hollywood. We need to hold those in power accountable for their actions and work to create a more equitable and just industry for all actors." - Yara Shahidi, actress and activist.</li>
                <li>"Brendan Fraser's courage in speaking out about his experiences is inspiring. It takes incredible strength to confront past trauma, and we should all support survivors in their healing journeys." - Tarana Burke, founder of the #MeToo movement.</li>
                <li>"Brendan Fraser's story is a reminder that sexual harassment and abuse can happen to anyone, regardless of gender or status. We need to create a society where survivors are supported and perpetrators are held accountable." - Joe Biden, former Vice President of the United States, current President of the United States.</li>
              </ul>
              
              <p className="mb-4">
                It is crucial to support survivors of sexual assault and to create a culture where speaking out is encouraged and survivors are believed and supported. By breaking the silence and sharing our stories, we can help to raise awareness about the prevalence of sexual assault and the need for change. Brendan Fraser's bravery in sharing his story can serve as an inspiration to others who have experienced sexual assault. It is important to continue to speak out about sexual assault and to work towards a world where survivors are supported, believed, and valued. We all have a role to play in creating a culture of respect, consent, and safety, and we must work together to make this vision a reality.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-start">
            <a href="https://www.instagram.com/p/Cp5gBG5P-Ew/?igsh=MTc4MmM1YmI2Ng==" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/img/talks/brendan.jpg"
                alt="Brendan Fraser Article"
                width={400}
                height={300}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection; 