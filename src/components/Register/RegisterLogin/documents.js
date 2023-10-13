import React from "react";

const documents = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <div>
            <h5>تصاویر مدارک لازم برای ثبت نام:</h5>
            <ul>
              <li>-گواهی نامه</li>
              <li>-بیمه نامه</li>
              <li>-عکس راننده</li>
              <li>
                -معاینه فنی(برای خودروهایی که 4 سال از تاریخ تولیدآن گذشته
                باشد.)
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div>
            <img src={require('./imageDoc/4.svg').default}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default documents;
