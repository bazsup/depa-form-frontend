# Open Online Testing Web (Intro)

โปรเจ็คนี้จัดทำขึ้นมาเพื่อเป็นตัวอย่างของหน้าเว็บไซต์ที่เป็นส่วนของ Presentation Layer ถูกพัฒนาด้วย React.js

## ตัวอย่าง

https://depa.opencloudnative.online/

### ระบบนี้ประกอบด้วย 2 ส่วนใหญ่ ๆ คือ

1. Backend Service - ให้บริการตาม function ของระบบ depa testing ทั้งหมด แต่จะไม่มีส่วนของ User Interface (UI) จะขอเรียกส่วนนี้ว่า [Open Online Testing Service - API](https://github.com/imgrbs/open-online-testing-api)
2. Frontend Service - เป็น User Interface ของระบบซึ่งเรียกใช้ Backend Service เพื่อให้บริการแก่ User จะขอเรียกส่วนนี้ว่า [Open Online Testing Service - Web](https://github.com/bazsup/open-online-testing-web)

## การใช้งาน

- สามารถสมัครสมาชิก / เข้าสู่ระบบ ได้ผ่านช่องทาง username, password / login with google / login with facebook
- สามารถสร้างคำถามและสร้างหมวดหมู่ของคำถามได้
- สามารถสร้างชุดข้อสอบได้ โดยทำการเลือกคำถามที่สร้างมารวมกันเป็นชุดข้อสอบ
- ระบบการสอบ
  - สามารถเข้าทำชุดข้อสอบได้
  - สามารถส่งคำตอบเข้าสู่ระบบได้
  - สามารถปฏิเสธการเข้าถึงห้องสอบได้หากผิดเงื่อนไข
    1. ผู้เข้าสอบเข้าห้องสอบก่อนเวลาทำข้อสอบจะเริ่ม
    1. ผู้เข้าสอบเข้าห้องสอบหลังเวลาสิ้นสุดการทำข้อสอบ
    1. ผู้เข้าสอบเคยส่งคำตอบของชุดข้อสอบนี้ไปแล้ว

## โครงสร้างระบบ

- 1 Backend รองรับหลาย ๆ Frontend ได้
- 1 Frontend รองรับหลาย ๆ หน่วยงานได้
- Frontend กับ Backend อยู่ Server เดียวกันหรือต่างกันก็ได้

![Overview Testing System  - ServiceType](https://user-images.githubusercontent.com/22396258/93670573-84668000-fac6-11ea-957f-d2a82a84913b.png)

## เริ่มต้นการใช้งาน

1. ทำการ Clone Project

```sh
$ git clone https://github.com/bazsup/open-online-testing-web.git
```

หรือทำการ Download as zip ก็ได้เช่นกัน

2. เข้าไปยัง Directory ของ Project จากนั้นทำการลง Dependency ที่โปรเจ็คใช้งาน ในขั้นตอนนี้จำเป็นต้องทำการติดตั้ง Package Management ของภาษา Javascript ก่อน เช่น npm, yarn

```sh
$ yarn
```

หรือ

```sh
$ npm install
```

\*หากไม่มี npm สามารถดาวโหลด nodejs มาติดตั้ง โดยทำการดาวโหลดได้ที่ https://nodejs.org/en/download/

3. ทำการสร้างไฟล์ file `.env` ใน root project และทำการ COPY ค่าจาก `.env.example` มาไว้ที่ไฟล์ `.env` หรือใช้คำสั่งด้านล่าง

```sh
$ cp .env.example .env
```

4. ทำการตั้งค่า `REACT_APP_BASE_API_URL` ในไฟล์ `.env` เพื่อบ่งบอก Project ว่าจะต้องคุยกับ Backend ที่ URL อะไร เช่น https://api.opencloudnative.online/

5. ทำการตั้งค่า `REACT_APP_BASE_APP_URL` ในไฟล์ `.env` เพื่อบ่งบอก Frontend Project URL

6. เปิดโปรเจ็คขึ้นมาด้วยคำสั่ง

```sh
$ yarn start
```

หรือ

```sh
$ npm start
```

เมื่อโปรเจ็คถูกรันขึ้นมาแล้ว สามารถเข้าได้ผ่าน http://localhost:3000/

## Roadmap

พวกเราคาดหวังที่จะมี Feature ที่เพิ่มเติมขึ้นใน Presentation Layer นี้ ได้แก่

- การพัฒนา Feature ในส่วนที่มีอยู่ก่อนแล้วให้สามารถใช้งานได้สมบูรณ์ เช่น การพัฒนาให้คำถามที่ถูกสร้างมาแล้ว สามารถ แก้ไข, ลบ ได้ หรือการอัพเดทรายละเอียดห้องสอบ
- การนำประโยชน์ของหมวดหมู่ของคำถาม/ชุดข้อสอบ มาพัฒนาในส่วนของ Presentation Layer ให้สามารถคัดเลือกให้โชว์ตามหมวดหมู่ที่ต้องการได้
- การรองรับการทำข้อสอบในรูปแบบ Adaptive Testing
- การรองรับการตรวจข้อสอบบน Presentation Layer
- การมี Dashboard ที่ทำการ Analyze ตัวคะแนนของผู้เข้าสอบที่ผ่าน ๆ มา เพื่อบ่งบอกถึงจุดที่ผู้เข้าสอบนั้นบกพร่อง เพื่อเป็นจุดที่ทำให้บอกผู้เข้าสอบนั้นว่าต้องพัฒนาตนเองในส่วนนี้ต่อไป
- รองรับการออก Report ผ่านทาง Presentation Layer

## License

สัญญาการอนุญาตของซอฟต์แวร์อยู่ภายใต้เงื่อนไขของ [MIT license](/LICENSE)

## Contributing

พวกเรายินดีที่จะมีคนเข้ามาร่วมพัฒนาด้วย ทุกคนสามารถเปิด Pull request เข้ามาได้ พวกเราจะช่วยกัน Review Code แล้วทำการ Merge Code ของคุณ เพื่อเข้ามาเป็นส่วนหนึ่งของโปรเจ็คนี้

คุณสามารถดูวิธีการ Contribute เพิ่มเติมได้ที่ [CONTRIBUTING.md](/CONTRIBUTING.md) จากนั้นทำการเพิ่มชื่อของคุณเข้ามาเป็นส่วนหนึ่งกับพวกเราด้านล่างนี้

## Infrastructure

Deployment นั้นจะมี Component สำหรับใช้ในการดึง ConfigMap มาใช้เป็น Environment หรือการทำ ReverseProxy ให้
เวลาเรา Build ใน environmnet ของ Jenkins Pipeline จะได้ ENV ไปดว้ยเช่นกันดังนั้นเราจึงสามารถใช้ควบคุ๋กับ process.env ได้เลยเมือนว่ากำลัง Build อยู่บนคอมเราจริงๆอีกด้วย

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/imgrbs">
        <img src="https://avatars2.githubusercontent.com/u/11602960?u=e08ffeedc189ba4efc87af5452ccc2ca839f0cee&v=4" width="100px;" alt="" /><br />
        <b>ImagineRabbits</b><br />
        <a href="https://github.com/imgrbs/open-online-testing-web/commits?author=imgrbs" title="Code">💻</a>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/bazsup">
        <img src="https://avatars2.githubusercontent.com/u/22396258?u=6e1fb78f3196e20d093c98d205debb10ef5e5d4e&v=4" width="100px;" alt="" /><br />
        <b>Supawit</b><br />
        <a href="https://github.com/imgrbs/open-online-testing-web/commits?author=bazsup" title="Code">💻</a>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/wdrdres3qew5ts21">
        <img src="https://avatars2.githubusercontent.com/u/25000903?u=622a8832381cbddd89795db393a9e8d5b1e347df&v=4" width="100px;" alt="" /><br />
        <b>Naomi Lin</b><br />
        <a href="https://github.com/imgrbs/open-online-testing-web/commits?author=wdrdres3qew5ts21" title="Code">💻</a>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/bigzaja4">
        <img src="https://avatars2.githubusercontent.com/u/24911638?u=3e3e61a6335f335ae16187dff3b4348f660f4ab7&v=4" width="100px;" alt="" /><br />
        <b>Biggie</b><br />
        <a href="https://github.com/imgrbs/open-online-testing-web/commits?author=bigzaja4" title="Code">💻</a>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/mixkungz">
        <img src="https://avatars2.githubusercontent.com/u/20185035?u=99b107326654533f94afc5d4524cd4ff31722f2b&v=4" width="100px;" alt="" /><br />
        <b>
Phachara Kamthong</b><br />
        <a href="https://github.com/imgrbs/open-online-testing-web/commits?author=mixkungz" title="Code">💻</a>
      </a>
    </td>
  </tr>
</table>

<br />
ผลงานนี้เป็นส่วนหนึ่งของ “ทุนเพชรพระจอมเกล้าเพื่อพัฒนาเทคโนโลยีและนวัตกรรมดิจิทัล (KMUTT-depa)” สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa) และ คณะเทคโนโลยีสารสนเทศ มจธ. (SIT)
