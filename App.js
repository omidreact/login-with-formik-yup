import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
const example = () => {
  const [emmail, setemmail] = useState("");
  const [passsword, setpasssword] = useState("");
  const subbmit = () => {
    console.log({
      email: emmail,
      password: passsword,
    });
  };
  const validationSchema=yup.object().shape({
    email:yup.string().email("فرمت ایمیل معتبر نمیباشد"),
    password:yup.string().min(6,"پسوورد حداقل باید 6 کاراکتر باشد")
  })
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "pink",
        }}
      >
        <Image
          source={require("./assets/icon.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <View style={{ flex: 2, alignItems: "center", marginTop: 20 }}>
        <Text>wellcome to my test app</Text>
      </View>


<Formik
validationSchema={validationSchema}
initialValues={{email:"",password:""}}
onSubmit={(values,{setSubmitting})=>{
setTimeout(()=>{
  alert(JSON.stringify(values,null,2))
  setSubmitting(false)
},500)
}}
>
{
  ({values,errors,handleChange,handleBlur,handleSubmit})=>(


    <View style={{ flex: 3, alignItems: "center" }}>
    <TextInput
      placeholder="enter email"
      style={{ backgroundColor: "pink", width: "80%" }}
      onBlur={handleBlur("email")}
      onChangeText={handleChange("email")}
      value={values.email}

    />
    <Text style={{color:"red",fontWeight:"bold"}}>{errors.email}</Text>
    <TextInput
      placeholder="enter password"
      style={{ backgroundColor: "lightblue", width: "80%" }}
      onBlur={handleBlur("password")}
      onChangeText={handleChange("password")}
      value={values.password}

    />

    <Text style={{color:"red",fontWeight:"bold"}}>{errors.password}</Text>
    <Pressable onPress={handleSubmit}>
      <Text
        style={{
          width: 150,
          textAlign: "center",
          backgroundColor: "violet",
          color: "white",
        }}
      >
        login
      </Text>
    </Pressable>
  </View>



  )
}
</Formik>



    </View>
  );
};
export default example;
