import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="main_page">
      <div className="main_advice">
        <h2>10 ways to make your day as productive as possible</h2>
        <ol>
          <li>
            <p>Every Sunday night, make plans for the week</p>
          </li>
          <li>
            <p>Set aside time in advance for specific tasks</p>
          </li>
          <li>
            <p>Make sure the list of tasks is achievable</p>
          </li>
          <li>
            <p>Set up a 30-minute default meeting</p>
          </li>
          <li>
            <p>Say no multitasking</p>
          </li>
          <li>
            <p>Try to make the best use of «border» time</p>
          </li>
          <li>
            <p>Watch the time</p>
          </li>
          <li>
            <p>Think about dinner</p>
          </li>
          <li>
            <p>
              Don’t take up any of the time you have to spend with your family
            </p>
          </li>
          <li>
            <p>Start every day right</p>
          </li>
        </ol>
      </div>
      <div className="main_img">
        <img
          src="https://ik.imagekit.io/s2fpg15d4rx/time_NifncTLm-ND.jpg"
          alt="time"
        />
        <img
          src="https://ik.imagekit.io/s2fpg15d4rx/glasses1_4_fSdw54Wgo.jpg"
          alt="glasses"
        />
      </div>
    </div>
  );
};

export default MainPage;
