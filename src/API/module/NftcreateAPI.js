import axios from 'axios'

const NftcreateAPI = {
  sendIpfs: async (ifpsInfo) => {
    try {
      console.log("adsa");
      const url = "https://api.nft.storage/upload";
      const result = await axios.post(url, ifpsInfo, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEI3OWI4M2U0ZDEyNTRGNTNCRWQzOEJlOTdBREI0OTIwN0YwNGVBMDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NDM5MjA0MzczOCwibmFtZSI6ImhhY2thdGhvbiJ9.aAuLooEIRIqcCtAr9yw3uhKv8MRiveO9JBaC_rmXFgQ'
        }
      })
      const { status, message, data } = result;
      if (status === 200) {
        const { cid } = data.value;
        console.log(cid);
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
};

export default NftcreateAPI;
