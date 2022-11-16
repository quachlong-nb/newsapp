/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
//core component
import { Button, Grid } from "@material-ui/core";
//my component
import MyButton from '../Button/Button.js'
// icon svg
import svg__fb from "assets/svg/fb.svg";
import svg__instagram from "assets/svg/instagram.svg";
import svg__twitter from "assets/svg/twitter.svg";
import svg__youtube from "assets/svg/youtube.svg";
//img
import logo__white from "assets/img/logo/logo__white.png";
import qr_android from 'assets/img/qr_android.png';
import qr_ios from 'assets/img/qr_ios.png';
import styles from "assets/jss/nextjs-material-kit-pro/components/footerStyle.js";
import gg from '../../assets/img/googleplay.png';
import as from '../../assets/img/appstore.png';

const useStyles = makeStyles(styles);
export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer>
      <div style={{ height: '296px', marginTop: '30px', backgroundColor: "#130063" }}>
        <div style={{ width: '1200px', marginLeft: 'auto', marginRight: 'auto', height: '100%' }}>
          <div className={classes.content}>
            <div>
              <div style={{ height: '296px' }}>
                <Grid justify="space-between" container style={{ width: '100%', margin: '0px' }}>
                  <Grid item xs={2} style={{ margin: '30px 0px' }}>
                    <div style={{ color: '#FFFFFF', height: '170px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <h2 className={"Type_Title"} style={{ textTransform: 'uppercase', fontWeight: 'bold', margin: '0px' }}>liên hệ chúng tôi</h2>
                      <div className={"Description"}>
                        Địa chỉ:  A building, B floorNumber X,
                        Y stress, Z city, N province VietNam
                      </div>
                      <div className={"Description"}>
                        <div>Hotline: 1900xxxx789</div>
                        <div>Gmail: Example@gmail.com</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={2} style={{ margin: '30px 0px' }}>
                    <div style={{ color: '#FFFFFF', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <h2 className={"Type_Title"} style={{ textTransform: 'uppercase', fontWeight: 'bold', margin: '0px' }}>MỚI NHẤT VỀ AKVSA</h2>
                      <div className={"Description"}>
                        Nhận tất cả các thông tin mới
                        về AKVSA
                      </div>
                      <div>
                        <MyButton type="type2" >
                          <div
                            style={{
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "12px",
                              lineHeight: "30px",
                              color: '#FFFFFF',
                              textTransform: 'none',
                              marginTop: '-6px',
                              marginBottom: '-6px',
                              padding: "0px 2px",
                            }}
                          >Đăng nhập</div>
                        </MyButton>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={3} style={{ margin: '30px 0px 0px 0px' }}>
                    <div style={{ width: '100%', height: '220px', color: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <h2 className={"Type_Title"} style={{ textTransform: 'uppercase', fontWeight: 'bold', margin: '0px' }}>TẢI XUỐNG APP</h2>
                      <div className={"Description"}>
                        Tải App xuống cho điện thoại để đăng kí
                        tài khoản mới
                      </div>
                      <div style={{ display: 'flex', cursor: 'pointer' }}>
                        <div style={{ marginRight: '30px', textAlign: 'center' }}>
                          <MyButton
                            clickEvent={()=>props.handleOpenForm()}
                            type="type2"
                            style={{
                              cursor: 'pointer',
                              textAlign: 'left',
                              padding: '3px 10px',
                            }}
                          >
                            <img src={gg} width={18} height={22} style={{ marginRight: '5px' }} />
                            <div>
                              <div style={{ fontSize: '10px', fontWeight: '200', color: "#FFFFFF", lineHeight: '14px' }}>GET IT ON</div>
                              <div style={{ fontSize: '13px', fontWeight: '900', color: "#FFFFFF", lineHeight: '14px',textTransform:'none' }}>Google Play</div>
                            </div>

                          </MyButton>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                        <MyButton
                          clickEvent={props.handleOpenForm}
                            type="type2"
                            style={{
                              cursor: 'pointer',
                              textAlign: 'left',
                              padding: '3px 10px',
                            }}
                          >
                            <img src={as} width={22} height={22} style={{ marginRight: '5px' }} />
                            <div>
                              <div style={{ fontSize: '10px', fontWeight: '200', color: "#FFFFFF", lineHeight: '14px' }}>GET IT ON</div>
                              <div style={{ fontSize: '13px', fontWeight: '900', color: "#FFFFFF", lineHeight: '14px',textTransform:'none' }}>App Store</div>
                            </div>

                          </MyButton>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={2} style={{ margin: '30px 0px' }}>
                    <div style={{ color: '#FFFFFF', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <h2 className={"Type_Title"} style={{ textTransform: 'uppercase', fontWeight: 'bold', margin: '0px' }}>TRUYỀN THÔNG</h2>
                      <div style={{ width: '100%' }} className={"Description"}>
                        <div style={{ width: '100%', paddingRight: '60px', display: 'flex', justifyContent: 'space-between' }}>
                          <img width={24} height={24} src={svg__fb} />
                          <img width={24} height={24} src={svg__instagram} />
                          <img width={24} height={24} src={svg__twitter} />
                          <img width={24} height={24} src={svg__youtube} />
                        </div>
                      </div>
                      <div className={"Description"}>
                        <div>Hotline: 1900xxxx789</div>
                        <div>Gmail: Example@gmail.com</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={2} style={{ margin: '8px 0px' }}>
                    <div style={{ marginTop: '30px', color: '#FFFFFF', height: '150px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <img
                        style={{ width: '80%' }}
                        src={logo__white}
                      />
                    </div>
                  </Grid>
                </Grid>
                <div className="Description" style={{ marginTop: '30px', color: '#FFFFFF' }}>
                  © 2022 AKVSA . All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  );
}

