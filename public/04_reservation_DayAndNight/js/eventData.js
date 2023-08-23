



//낮 밤 선택 
const events = [
  [ // day
    {
      value : "",
      title : "행사를 선택해 주세요"
    },
    {
      start : "2023.04.20",
      end : "2023.08.28",
      value : "2023 경복궁 생과방",
      title : "2023 경복궁 생과방"
    },
    {
      start : "2023.05.29",
      end : "2023.08.06",
      value : "[고궁음악회] 풍류에 그루브(Groove)를 더하다",
      title : "[고궁음악회] 풍류에 그루브(Groove)를 더하다"
    },
    {
      start : "2023.06.20",
      end :  "2023.07.28",
      value : "[궁중문화축전] 인문학콘서트 <궁중책방-고종의 초대>",
      title : "[궁중문화축전] 인문학콘서트 <궁중책방-고종의 초대>"
    },
    {
      start : "2023.07.28",
      end :  "2023.07.30",
      value : "2023년 궁중문화축전 개막제",
      title : "2023년 궁중문화축전 개막제"
    }
  ],
  [ // night
    {
      value : "",
      value : "행사를 선택해 주세요",
      title : "행사를 선택해 주세요"
    },
    {
      start : "2023.06.15",
      end : "2023.07.13",
      value : "2023 경복궁 별빛야행",
      title : "2023 경복궁 별빛야행"
    },
    {
      start : "2023.06.25",
      end : "2023.07.04",
      value : "2023 수라간 시식공감",
      title : "2023 수라간 시식공감"
    },
    {
      start : "2023.07.29",
      end : "2023.08.02",
      value : "[궁중문화축전] 고궁뮤지컬 - 세종 1446",
      title : "[궁중문화축전] 고궁뮤지컬 - 세종 1446"
    },
    {
      start : "2023.08.22",
      end : "2023.09.02",
      value : "2023 고궁음악회 하반기 기획행사 - 발레(Ballet) X 수제천",
      title : "2023 고궁음악회 하반기 기획행사 - 발레(Ballet) X 수제천"
    }
  ]
]






const day_time = [
  [ //2023 경복궁 생과방
    {
      value : "0",
      title : "회차를 선택해 주세요"
    },
    {
      value : "15000",
      title : "1회차(10:00 ~ 12:00) [잔여:2]"
    },
    {
      value : "15000",
      title : "2회차(12:00 ~ 14:00) [잔여:1]"
    },
    {
      value : "15000",
      title : "3회차(14:00 ~ 16:00) [잔여:6]"
    },
  ],
  [ //[고궁음악회] 풍류에 그루브(Groove)를 더하다
    {
      value : "0",
      title : "회차를 선택해 주세요"
    },
    {
      value : "15000",
      title : "1회차(10:00 ~ 12:00) [잔여:2]"
    },
    {
      value : "15000",
      title : "2회차(12:00 ~ 14:00) [잔여:1]"
    },
    {
      value : "15000",
      title : "3회차(14:00 ~ 16:00) [잔여:6]"
    },
  ],
  [ //[궁중문화축전] 인문학콘서트 <궁중책방-고종의 초대>
    {
      value : "0",
      title : "회차를 선택해 주세요"
    },
    {
      value : "15000",
      title : "1회차(10:00 ~ 12:00) [잔여:2]"
    },
    {
      value : "15000",
      title : "2회차(12:00 ~ 14:00) [잔여:1]"
    },
    {
      value : "15000",
      title : "3회차(14:00 ~ 16:00) [잔여:6]"
    },
  ],
  [ // 2023년 궁중문화축전 개막제
    {
      value : "0",
      title : "회차를 선택해 주세요"
    },
    {
      value : "10000",
      title : "1회차(10:00 ~ 12:00) [잔여:2]"
    },
    {
      value : "10000",
      title : "2회차(12:00 ~ 14:00) [잔여:1]"
    },
    {
      value : "10000",
      title : "3회차(14:00 ~ 16:00) [잔여:6]"
    },
  ],
  ]



  const night_time = [
    [ //2023 경복궁 별빛야행
      {
        value : "0",
        title : "회차를 선택해 주세요"
      },
      {
        value : "60000",
        title : "1회차(16:00 ~ 18:00) [잔여:2]"
      },
      {
        value : "60000",
        title : "2회차(18:00 ~ 20:00) [잔여:1]"
      },
      {
        value : "60000",
        title : "3회차(20:00 ~ 22:00) [잔여:6]"
      },
    ],
    [ //2023 수라간 시식공감
      {
        value : "0",
        title : "회차를 선택해 주세요"
      },
      {
        value : "25000",
        title : "1회차(16:00 ~ 18:00) [잔여:2]"
      },
      {
        value : "25000",
        title : "2회차(18:00 ~ 20:00) [잔여:1]"
      },
      {
        value : "25000",
        title : "3회차(20:00 ~ 22:00) [잔여:6]"
      },
    ],
    [ //[궁중문화축전] 고궁뮤지컬 - 세종 1446
      {
        value : "0",
        title : "회차를 선택해 주세요"
      },
      {
        value : "20000",
        title : "1회차(16:00 ~ 18:00) [잔여:2]"
      },
      {
        value : "20000",
        title : "2회차(18:00 ~ 20:00) [잔여:1]"
      },
      {
        value : "20000",
        title : "3회차(20:00 ~ 22:00) [잔여:6]"
      },
    ],
    [ // 2023 고궁음악회 하반기 기획행사 - 발레(Ballet) X 수제천
      {
        value : "0",
        title : "회차를 선택해 주세요"
      },
      {
        value : "10000",
        title : "1회차(16:00 ~ 18:00) [잔여:2]"
      },
      {
        value : "10000",
        title : "2회차(18:00 ~ 20:00) [잔여:1]"
      },
      {
        value : "10000",
        title : "3회차(20:00 ~ 22:00) [잔여:6]"
      },
    ],
    ]