jQuery('form[target="FormPanel_com.freiheit.toro.Toro_2"]').submit();

jQuery.ajax({
  type: 'POST',
  url: '/toro/upload/entity',

  contentType: "multipart/form-data; boundary=----WebKitFormBoundaryEVsBf2qc4vhvKXr7",
  // "Accept": `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/svg,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9`,
  headers: {
    Accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9`,
    // 'Accept-Encoding': `gzip, deflate, br`,
    'Accept-Language': `de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7,th;q=0.6,nb;q=0.5,la;q=0.4,gl;q=0.3`,
    'Cache-Control': `max-age=0`,
    // 'Connection': `keep-alive`,
    // 'Content-Length': `336038`,
    'Content-Type': `multipart/form-data; boundary=----WebKitFormBoundaryyJfRcSxHbMQst9a6`,
    // 'Cookie': `XSRF-TOKEN=dcc77fab-d3c7-4309-acec-b74874bdf5b1; loadproxy=1; trusted-device=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJHUmRrY3E0TEdlRjV1SkRtTmtMRGRnIiwiaWF0IjoxNjQzODg1NTIxLCJuYmYiOjE2NDM4ODU0MDEsImV4cCI6MTY0NjQ3NzUyMSwic3ViIjoiUFJPRklMRSw0In0.d9eCkENJmxLBzWLUPk9HunhliETmGgd_-SMyavW6fH8; jc_locale=en; just-id=eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiY3R5IjoiSldUIn0.QqlKVwXSfx00_epyB1h8ZIR9mdc1e-x1_mmDEQMq4QdtfcZJnebxqnzRwRjbLalsdruYOFMqISPoe1bvocUPmCq7ykdmdgn-doOngo4VY0iMOKeoRWJuw5t-6LxBO7ugLv8tZqcuQqIlgcvs5ErhYBkfMpLu8wpOiH2lsB_6udUUtsDvDJ6Cblfv9yktfkimcs_86OxT4e950GhIpWStvYeExbAUUS_b-SqgCbm3PPJ56U0ru3gQPLMTPqUfHm5OFhZkIe6BUAWIQArhSOhuulUALewMTwNvWUutMnctyV6SAfr8BtUDJbsVEH8osppiNpHyq_46QnwyJkgV7CFDnloEgg9hhywtnCHxpEG7yeBM1jpvcH-0n5z1Pe37OYDpB_iiFgJ2PRpOd1QSttyvYrkZ7Vt2OxJBQPSVCRuVM2_xj8E4NY13KB10701nQ7kM47eeXdalnT16al3uq5espcpf6TalzqA_4f79LdMHzPviaq-fBy1TqWc35_TnXfBxd6sA5mQxMEZEXHp3pfxNW0vIaIb4gRoMaMkFJOBWIXc5o0ILzBP2X8tya6o5nphcC6He7Gty73hveLSCAUsrQsOGWUylygay4Qzs7ekTcTfdzAwVosOhALGYHt_ePnhMn59VixqVHmuHOtcJ5Fp3EaVnn13Cccei9hwQI4Pximk.vinyK1FzLbIUIEp8XSWE3g.1JOSzGo5FoIb3rYnVCZ2-zse6mjStFFQlOEi4wJb_HLJUCHyFchC3PmjSo3-JsrvVGI2809XSkRMqOF90sFAtV122S-ikLHg40VVTlOT3wq2d4TA6JnqUTBUgORLNXPWtNJcXEYql8W89aWCKZVsWiReO8DV8hV9TeJvSn5pAwBRL7BdXjW8RPPSa_sa6osW4swJDQwpB4EWvGilFtBeq98GSMgqQ1Lzq0boAsg6_-IxX9Zvl7MCiBl4SE3j-cMoyI1fKDTK0fI7V_p5JVBP2jjq4s4zo5Ao4ZBv00lcx8zGNrexsIKPl88Fc9BqHJo7PedsVrHKcknDz5BdurFDGaOLB_SbEv_ztsyYsZbFCE_5tjVdNVDefql5vgO149hKVK5En_yEUVODyIdkPCvYfTFmr0kcARFsASt6_HmxrLHARDstKFzax6cDyWokzADGSrZr2u1EYaWz70rKNjf6_NHGkA0cR8EacyXy0OsvNzLfysbqOVoxXHEHpedho1thGdO9ACFo-t2DZ--fCVwb19sURs4BkxrMaoWxzq-nucyK6VwzsPv8fqnXvbAP_BuYJKuLDAPyRNK3dvhROcXNElO3Z78Jh6GKOWAGi2tcBRgcCeDogpkot6PGfJ1VwV83xX6mvsC7bjkhLjiFHbfOE8eS4YQqkiz9hWnUPyqhKTCh44A-gr60JopPKC_KvurW1LGkyLJIHK336_Ir4pmGxGlsZqJF60mW-Y0V65KFg86EN0lXlLbiMJEDWlp_INZXtmdBnQWY9zIpWu7V2mcYLL2P1LYfiYHh2HdmWfwpitzIWlgpFyVq8YmGv8iPBL1XRnDG6VxxZtKdPDn4LPVoAAE6WHVllS-91gjQ-2bms2HgIhq04eRB5ep70_eM7ZMuHUhObzK27lpEBFCcEV-Y6l2IqJqTzxMCFXqrTv8VHdeLAryTQFpz-Ylo9dYGpGDUfE4WQmBDX0cuPFnWzfaMZVbqYVWqI6ER-bxL_23cCD8FOGTeALR006HDYzmw7FrYpFmrsdNkH_Gg4SKXGVku3Gr8qQdPB2_t8YVAtFur_4RSSbhOdR_UVHcx43z3lBdqoP0mQQuRZAg4q0zxIm9Q4aFQNaV304MjA695DWDWBB-SEFMXe6T1-UrU3cr4A1GOjbnpClXEUtAuY9jahpOuCkdAl1ccL43566lQbbT1Rwe_u8cft3_v2SLJ9H4K_3fV.r6DrA5mbUTgoEfnUZO1bkg`,
    // 'Host': `kultour.club`,
    // 'Origin': `https://kultour.club`,
    // 'Referer': `https://kultour.club/toro/resource/html`,
    // 'sec-ch-ua': `" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"`,
    // 'sec-ch-ua-mobile': `?0`,
    // 'sec-ch-ua-platform': `"macOS"`,
    // 'Sec-Fetch-Dest': `iframe`,
    // 'Sec-Fetch-Mode': `navigate`,
    // 'Sec-Fetch-Site': `same-origin`,
    // 'Sec-Fetch-User': `?1`,
    'Upgrade-Insecure-Requests': `1`,
    // 'User-Agent': `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36`
  },
})
