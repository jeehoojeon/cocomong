import React, { useState, useEffect, useRef } from 'react';
import './Section2.css';

function Section2({ isActive }) {
  const characters = [
    {
      name: '코코몽',
      image: '/img/f_cocomong.png',
      thumb: '/img/f_cocomong.png',
      description: '안녕 친구들! 난 냉장고 나라 발명왕 코코몽이야. 원래는 소시지 였는데 지금은 이렇게 원숭이가 됐지! 나는 정말 똑똑하고 못하는 게 없어. 그래서 항상 신기한 발명품으로 친구들을 깜짝 놀라게 하지. 뭐 가끔 실패할 때도 있지만...그래도 가끔 덕분에 재밌는 모험을 즐길 수 있잖아? 어때? 나와 함께 신나는 모험을 떠나 보지 않을래?'
    },
    {
      name: '아로미',
      image: '/img/f_aromi.png',
      thumb: '/img/f_aromi.png',
      description: '안녕! 난 예쁜 아로미야\n삶은 달걀이었다가 귀여운 토끼가 되었지\n새침해 보인다고들 하지만 누구보다 따뜻한 마음을 가졌어\n나는 예쁜 꽃을 좋아해. 보고 있으면 기분이 좋아지거든\n내 꽃밭에 놀러 올래?'
    },
    {
      name: '케로',
      image: '/img/f_kero.png',
      thumb: '/img/f_kero.png',
      description: '친구들 안녕! 나는 냉장고 나라 최고 멋쟁이 케로라고해\n원래는 당근이었는데 당나귀가 되었지 뭐니!\n나는 노래하고 춤추는 게 제~일 좋아!\n내가 새로 만든 노래 한 번 들어보지 않을래?'
    },
    {
      name: '아글',
      image: '/img/f_agul.png',
      thumb: '/img/f_agul.png',
      description: '나는 오이에서 악어로 변신한 요리왕 아글이야\n내가 만든 요리를 친구들이 맛있게 먹을 때 가장 행복해!\n그래서 항상 신선한 재료로 맛있는 음식을 만들지\n하지만 열심히 만든 요리를 먹지 않거나 남기면 정말 속상해\n친구들은 음식 투정하지 않고 골고루 잘 먹어 줄 거지?'
    },
    {
      name: '두리',
      image: '/img/f_duri.png',
      thumb: '/img/f_duri.png',
      description: '안녕! 내 이름은 두리야.\n뚱뚱한 무와 귀여운 버섯이었는데, 이렇게 커~다란 하마가 되었지.\n몸집이 너무 커서 가끔 문에 끼기도 하지만\n친구들과 노는 데는 문제 없다구.\n친구들은 힘센 나를 정~말 좋아하거든!'
    },
    {
      name: '파닥',
      image: '/img/f_padak.png',
      thumb: '/img/f_padak.png',
      description: '파닥파닥! 친구들, 안녕?\n나는 파에서 닭으로 변신한 파닥이야.\n언제나 행동이 앞서서 사고를 치기도 하지만...\n이해해줄래? 나는 무엇이든 일을 저지른 다음에야 깨닫거든.\n그래도 언제나 즐겁고 솔직한 파닥이를 사랑해줘~'
    }
  ];

  const [selected, setSelected] = useState(0);
  const [animate, setAnimate] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isActive) setSelected(0);
  }, [isActive]);

  useEffect(() => {
    setAnimate(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setAnimate(false), 400);
  }, [selected]);

  return (
    <section id="section2" className={isActive ? 'active' : ''}>
      <div className="section2_friends">
        <div className={`s2_${characters[selected].name.toLowerCase()}`}> 
          <img src={characters[selected].image} alt={characters[selected].name} />
          <em className={`bg_friends${animate ? ' animate' : ''}`}>FRIENDS</em>
          <div className="s2_txt">
            <h2>{characters[selected].name}</h2>
            <p>{characters[selected].description}</p>
          </div>
        </div>
      </div>
      <div className="section2_thumbs">
        {characters.map((c, idx) => (
          <div
            key={c.name}
            className={`thumb${selected === idx ? ' active' : ''}`}
            onClick={() => setSelected(idx)}
          >
            <img src={c.thumb} alt={c.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section2;
