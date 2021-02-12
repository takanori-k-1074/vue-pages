<template>
  <div>
    <form>
      <input type="file" id="file" v-on:change="onFileChange">
      <input type="submit" value="decide" @click="submitClick">
    </form>
  </div>
</template>
<script>
import Axios from "axios";
export default {
    data() {
        return {
            imageFile: null
        };
    },
    methods: {
        //画像が選択されたとき呼ばれる
        onFileChange(e) {
            this.imageFile = e.target.files || e.dataTransfer.files;
        },
        //submitされたときに呼ばれる
        async submitClick() {
            try {
                const formData = new FormData();
                formData.append("file", this.imageFile[0]);
                const config = {
                    headers: {
                        "content-type": "multipart/form-data",
                    }
                };
                let res = await Axios.post("#", formData, config);
                console.log(res);
                if (res.data.status === "error") {
                    alert(res.data.error);
                } else {
                    alert("登録完了")
                }
            } catch (error) {
                alert("画像の送信に失敗しました");
            }
        }
    }
}
</script>