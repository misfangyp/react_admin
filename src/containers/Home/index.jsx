import { useNavigate } from "react-router-dom";
import { Button, DatePicker } from "antd";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="v-index-index">
      <div className="wrap">首页</div>
    </div>
  );
}
export default Home;
