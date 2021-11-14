import React , {useEffect} from "react";
import { Upload, message } from "antd";
import { PictureOutlined } from "@ant-design/icons";
import { BASE_URL } from '../../utils';
import {PRE_UPLOAD} from '../../utils/constant';
import axios from '../../utils/request';
import UploadAxios from "../../utils/uploadRequest";
import { file } from "@babel/types";

const { Dragger } = Upload;

function MultipleUpload({uploadList , setUploadList , media , setFormDataArtwork , formDataArtwork}) {

useEffect(() => {
    console.log("formDataArtwork?.media  ---->>>" , formDataArtwork?.media );
}, [formDataArtwork?.media])




  const propsUpload = {
    listType: "picture",

    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {

      }
      if (status === "done") {

      } else if (status === "error") {
        //if status error, image not added to list upload 
        setFormDataArtwork({...formDataArtwork , media : media?.filter((item) => item.uid !== info.file.uid)  });
      }

      return info;
    },
    progress: {
      strokeColor: {
        "0%": "#e6007e",
        "100%": "#e6007e",
      },
      width: "50%",
      strokeWidth: 3,
      format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
    },

    onRemove: (file) => {
        setFormDataArtwork({...formDataArtwork  , media : media?.filter((item) => item.file_key !== (file.file_key ? file?.file_key : file?.originFileObj?.file_key )) });
    },

    showUploadList: {
      showDownloadIcon: false,
      downloadIcon: "download ",
      showRemoveIcon: true,
      // removeIcon: <DeleteOutlined onClick={e => handleRemoveUploadImage(e)} />,
    },

    itemRender: (OriginNode, file, fileList, actions) => {

console.log("file &&&&&" , file);
      return [
        OriginNode,
        <div className="default-checkbox-image-upload d-flex justify-content-end ">
          <input
            checked={file?.is_default}
            onClick={(e) => defaultImageHandler(e, (file.file_key ? file?.file_key : file?.originFileObj?.file_key))}
            name="is_default"
            className="ml-1  mt-2"
            type="radio"
          />
          <span className="pb-2 mx-2">پیش‌فرض</span>
        </div>,
      ];
    },


    fileList : formDataArtwork?.media ? formDataArtwork?.media?.map(item => ({...item , name : item?.file_name , exact_url : file?.exact_url })) : []
  };


  // function for set default image between images that uploaded 
  const defaultImageHandler = (e, id) => {
    let newList = formDataArtwork?.media?.map(item => (
        item.file_key === id
        ? { ...item, is_default: true }
        : { ...item, is_default: false }
    ));

    console.log("newList --->>>" , newList);
    setFormDataArtwork( {...formDataArtwork , media : newList});
  };

  return (
    <React.Fragment>
      <Dragger
        {...propsUpload}
            className="upload-list-inline"
            customRequest={async (e) => {
          const { file, onSuccess, onError } = e;

          await axios
            .post(`${BASE_URL}${PRE_UPLOAD}`, {
              content_type: "image",
            })
            .then((res) => {
              onSuccess({ status: "success" });

              console.log("file ***" , file);
              console.log("upload_url ***" , res.data.data.result.upload_url);
                file.file_key = res.data.data.result.file_key;
                
              let uploadImage;
              uploadImage = {
                file_key: res.data.data.result.file_key,
                media_path: res.data.data.result.upload_url,
                name : file.name,
                file_name : file.name,
                type: "image",
                bucket_name: "image",
                is_default: false,
                uid: file.uid,
              };

              if (res.data.data.result.upload_url && (file?.type.split("/")[0] === "image")) {

                UploadAxios.put(res.data.data.result.upload_url , file)
                  .then((res) => {
                    // setUploadList([...uploadList, uploadImage]);
                    setFormDataArtwork({...formDataArtwork, media : [...media , uploadImage]});
                    message.success(` با موفقیت بازگذاری شد.`);
                  })
                  .catch((err) => {
                    console.error(err);
                    onError({ status: "error" });
                    message.error(`بارگذاری  با خطا مواجه شد.`);
                  });

              } else {
              }
            })
            .catch((err) => {
              console.error(err);
              onError({ status: "error" });
            });
        }}
      >
        <p className="ant-upload-drag-icon">
          <PictureOutlined className="img-icon-upload-add-new-artwork" />
        </p>
        <p className="ant-upload-text">تصاویر خود را در اینجا رها کنید</p>
      </Dragger>
    </React.Fragment>
  );
}

export default MultipleUpload;

