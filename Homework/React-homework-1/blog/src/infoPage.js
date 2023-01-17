import { user } from "./data";
import { Button } from "react-bootstrap";

function Info() {
  return (
    <div className="info">
      <h4>소개</h4>
      <h5>{user.userInfo}</h5>
      {user.userTag.map((content) => {
        return (
          <Button variant="info" className="infoTag">
            {content}
          </Button>
        );
      })}
      <br></br>
      <br></br>
      <h4>웹사이트</h4>
      <Button variant="info" className="infoTag">
        <a href={user.userUrl}>깃허브</a>
      </Button>
    </div>
  );
}

export default Info;
