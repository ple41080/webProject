import React from 'react'
import { Card, Form, Input, Button, Select, message } from 'antd'
import { useRouter } from 'next/router'
function FormRegister() {
    const size = "large"
    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();

    const sendData = (data) => {
        var axios = require('axios');
        var data = JSON.stringify({
            "address_no": data.address_no,
            "age": data.age,
            "branch_id": data.branch_id,
            "dateofbirth": data.dateofbirth,
            "district": data.district,
            "email": data.email,
            "emergency_person_fname": data.emergency_person_fname,
            "emergency_person_lname": data.emergency_person_lname,
            "emergency_tel": data.emergency_tel,
            "expiry_date": data.expiry_date,
            "facebook": data.facebook,
            "fname_EN": data.fname_EN,
            "fname_TH": data.fname_TH,
            "id_card": data.id_card,
            "issue_at": data.issue_at,
            "issue_date": data.issue_date,
            "lname_EN": data.lname_EN,
            "lname_TH": data.lname_TH,
            "moo": data.moo,
            "nationality": data.nationality,
            "p_height": data.p_height,
            "p_weight": data.p_weight,
            "pwd": data.pwd,
            "postal_code": data.postal_code,
            "province": data.province,
            "race": data.race,
            "religion": data.religion,
            "road": data.road,
            "sex": data.sex,
            "student_group": data.student_group,
            "student_id": data.student_id,
            "sub_district": data.sub_district,
            "tel": data.tel,
            "username": data.username
        });

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.CWIE_API}`+"/student/register",
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));

                messageApi.open({
                    type: 'success',
                    content: 'สมัครใช้งานเรียบร้อย',
                }, 2000);
                router.push({
                    pathname: "/login"
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (

        <>
            {contextHolder}
            <Form
                layout="inline"
                name='registerForm'
                onFinish={sendData}
            >

                <div className='w-full mt-2'>

                    <lable className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"> Username</lable>
                    <Form.Item
                        name={"username"}
                        rules={[{ required: true, message: "กรุณากรอก Username" }]}

                    >
                        <Input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className='w-full mt-2 '>
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Password</lable>
                    <Form.Item

                        name={"pwd"}
                        rules={[{ required: true, message: "กรุณากรอก Password" }]}
                    >
                        <Input type='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>

                <div className=' w-1/2  mt-2 '>
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อภาษาไทย</lable>
                    <Form.Item

                        name={"fname_TH"}
                        rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
                    >
                        <Input className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/2 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุลภาษาไทย</lable>
                    <Form.Item

                        name={"lname_TH"}
                        rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
                    >
                        <Input className=' justify-self-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className=' w-1/2  mt-2 '>
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อภาษาอังกฤษ</lable>
                    <Form.Item

                        name={"fname_EN"}
                        rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
                    >
                        <Input className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/2 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุลภาษาอังกฤษ</lable>
                    <Form.Item

                        name={"lname_EN"}
                        rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/2 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสนักศึกษา</lable>
                    <Form.Item
                        name={"student_id"}
                        rules={[{ required: true, message: "กรุณากรอกรหัสนักศึกษา" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/4 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">หมู่เรียน</lable>
                    <Form.Item
                        name={"student_group"}
                        rules={[{ required: true, message: "กรุณากรอกหมู่เรียน" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/4 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">สาขาวิชา</lable>
                    <Form.Item
                        name={"branch_id"}
                        rules={[{ required: true, message: "กรุณาเลือกสาขาวิชา" }]}
                    >
                        <Select size={size}>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className="w-1/2 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เบอร์โทรศัพท์</lable>
                    <Form.Item
                        name={"tel"}
                        rules={[{ required: true, message: "กรุณากรอกเบอร์โทรศัพท์" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/2 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อีเมล์</lable>
                    <Form.Item
                        name={"email"}
                        rules={[{ required: true, message: "กรุณากรอก E-mail" }]}
                    >
                        <Input type='email' className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-full mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook</lable>
                    <Form.Item
                        name={"facebook"}
                        rules={[{ required: true, message: "กรุณากรอกชื่อ facebook" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>

                <div className="w-1/2 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อบุคคลติดต่อกรณีฉุกเฉิน</lable>
                    <Form.Item
                        name={"emergency_person_fname"}
                        rules={[{ required: true, message: "กรุณากรอก ชื่อบุคคลติดต่อกรณีฉุกเฉิน" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/2 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุลบุคคลติดต่อกรณีฉุกเฉิน</lable>
                    <Form.Item
                        name={"emergency_person_lname"}
                        rules={[{ required: true, message: "กรุณากรอก นามสกุลบุคคลติดต่อกรณีฉุกเฉิน" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/2 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เบอร์โทรบุคคลติดต่อกรณีฉุกเฉิน</lable>
                    <Form.Item
                        name={"emergency_tel"}
                        rules={[{ required: true, message: "กรุณากรอกเบอร์โทรบุคคลติดต่อกรณีฉุกเฉิน" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-full mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสบัตรประชาชน</lable>
                    <Form.Item
                        name={"id_card"}
                        rules={[{ required: true, message: "กรุณากรอกรหัสบัตรประชาชน" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/2 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ออกให้ ณ</lable>
                    <Form.Item
                        name={"issue_at"}
                        rules={[{ required: true, message: "กรุณากรอก สถานที่ออกบัตร" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/4 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันออกบัตร</lable>
                    <Form.Item
                        name={"issue_date"}
                        rules={[{ required: true, message: "กรุณากรอก วันออกบัตร" }]}
                    >
                        <Input type='date' className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/4 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันหมดอายุ</lable>
                    <Form.Item
                        name={"expiry_date"}
                        rules={[{ required: true, message: "กรุณากรอก วันหมดอายุ" }]}
                    >
                        <Input type='date' className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/4 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เชื้อชาติ</lable>
                    <Form.Item
                        name={"race"}
                        rules={[{ required: true, message: "กรุณากรอก เชื้อชาติ" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/4 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">สัญชาติ</lable>
                    <Form.Item
                        name={"nationality"}
                        rules={[{ required: true, message: "กรุณากรอก สัญชาติ" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/4 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ศาสนา</lable>
                    <Form.Item
                        name={"religion"}
                        rules={[{ required: true, message: "กรุณากรอก ศาสนา" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>

                <div className="w-1/4 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วัน-เดือน-ปีเกิด</lable>
                    <Form.Item
                        name={"dateofbirth"}

                        rules={[{ required: true, message: "กรุณาเลือก วัน-เดือน-ปีเกิด" }]}
                    >
                        <Input type='date' className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/4 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อายุ</lable>
                    <Form.Item
                        name={"age"}
                        rules={[{ required: true, message: "กรุณากรอก อายุ" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/4 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เพศ</lable>
                    <Form.Item
                        name={"sex"}
                        rules={[{ required: true, message: "กรุณาเลือกสาขาวิชา" }]}
                    >
                        <Select size={size} >
                            <Select.Option value="male">ชาย</Select.Option>
                            <Select.Option value="female">หญิง</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className="w-1/4 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ส่วนสูง</lable>
                    <Form.Item
                        name={"p_height"}
                        rules={[{ required: true, message: "กรุณากรอก ส่วนสูง" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/4 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">น้ำหนัก</lable>
                    <Form.Item
                        name={"p_weight"}
                        rules={[{ required: true, message: "กรุณากรอก น้ำหนัก" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className='w-full mt-5'> <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ที่อยู่ตามบัตรประชาชน </lable></div>
                <div className="w-1/12 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขที่</lable>
                    <Form.Item
                        name={"address_no"}
                        rules={[{ required: true, message: "กรุณากรอก เลขที่" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/12 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">หมู่ที่</lable>
                    <Form.Item
                        name={"moo"}
                        rules={[{ required: true, message: "กรุณากรอก หมู่ที่" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/6 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ถนน</lable>
                    <Form.Item
                        name={"road"}
                        rules={[{ required: true, message: "กรุณากรอก ถนน" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/6 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ตำบล/แขวง</lable>
                    <Form.Item
                        name={"sub_district"}
                        rules={[{ required: true, message: "กรุณากรอก ตำบล/แขวง" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/6 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อำเภอ/เขต</lable>
                    <Form.Item
                        name={"district"}
                        rules={[{ required: true, message: "กรุณากรอก อำเภอ/เขต" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/6 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จังหวัด</lable>
                    <Form.Item
                        name={"province"}
                        rules={[{ required: true, message: "กรุณากรอก อำเภอ/เขต" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-1/6 mt-2 ">
                    <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสไปรษณีย์</lable>
                    <Form.Item
                        name={"postal_code"}
                        rules={[{ required: true, message: "กรุณากรอก รหัสไปรษณีย์" }]}
                    >
                        <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </Form.Item>
                </div>
                <div className="w-full mt-5 ">
                    <Form.Item  >
                        <Button className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" htmlType='submit' block size={size}>
                            บันทึกข้อมูล
                        </Button>
                    </Form.Item>
                </div>
                <div>
                    <p>ฉันมีบัญชีผู้ใช้แล้ว? <a className=' font-bold' href='/login'> เข้าสู่ระบบ</a></p>
                </div>

            </Form>
        </>
    )
}

export default FormRegister