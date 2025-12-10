<template>
  <div class="booking-container">
    <!-- 学校信息栏 -->
    <div class="school-bar">
      <img
        src="../assets/top.png"
        alt="中山大学"
        class="school-image"
        @click="closePage"
      />
    </div>

    <!-- 用户信息区域 -->
    <div class="user-section">
      <img src="../assets/info.png" alt="用户信息" class="user-image" />
    </div>

    <!-- 预约信息区域 -->
    <div class="booking-info">
      <div class="info-title">暂无车辆预约信息</div>
      <div class="campus-info">
        <span style="color: #005815">您已预约了</span
        ><span style="color: #007c36; font-weight: bold">广州校区南校园</span>
      </div>
    </div>

    <!-- 二维码区域 -->
    <div class="qr-section">
      <div class="qr-container">
        <div class="qr-illustration">
          <img src="../assets/member.png" alt="member" class="member-image" />
        </div>
        <div class="qr-code">
          <!-- 二维码图片 -->
          <img src="../assets/qc.png" alt="预约二维码" class="qr-image" />
        </div>
        <div class="qr-label">预约参观</div>
      </div>
    </div>
    <div>
      <img
        src="../assets/button.png"
        alt="查看预约"
        class="view-booking-btn"
        @click="openBookingDetails"
      />
    </div>
    <div class="line"></div>
    <!-- 预约功能列表 -->
    <div class="booking-functions">
      <!-- 预约记录 -->
      <div class="function-item">
        <img src="../assets/note.png" alt="预约记录" class="function-icon" />
        <div class="function-text">预约记录</div>
        <div class="function-arrow">></div>
      </div>
      <!-- 参观预约 -->
      <div class="function-item">
        <img src="../assets/people.png" alt="参观预约" class="function-icon" />
        <div class="function-text">参观预约</div>
        <div class="function-arrow">></div>
      </div>
      <!-- 现场预约 -->
      <div class="function-item">
        <img src="../assets/people.png" alt="现场预约" class="function-icon" />
        <div class="function-text">现场预约</div>
        <div class="function-arrow">></div>
      </div>
      <!-- 校园地图 -->
      <div class="function-item">
        <img src="../assets/j.png" alt="校园地图" class="function-icon" />
        <div class="function-text">校园地图</div>
        <div class="function-arrow">></div>
      </div>
    </div>
    <!-- 便民服务指引 -->
    <div class="service-guide">
      <img
        src="../assets/service.png"
        alt="便民服务指引"
        class="service-image"
      />
    </div>

    <!-- 底部导航 -->
    <nav class="bottom-nav">
      <div
        class="nav-item"
        :class="{ active: activeNav === 'home' }"
        @click="switchNav('home')"
      >
        <img
          :src="activeNav === 'home' ? homeActiveImage : homeImage"
          alt="首页"
          class="nav-icon"
        />
        <div class="nav-text">首页</div>
      </div>
      <div
        class="nav-item"
        :class="{ active: activeNav === 'message' }"
        @click="switchNav('message')"
      >
        <img
          :src="activeNav === 'message' ? messageActiveImage : messageImage"
          alt="消息"
          class="nav-icon"
        />
        <div class="nav-text">消息</div>
      </div>
    </nav>

    <!-- 预约详情弹窗 -->
    <div
      v-if="showBookingDetails"
      class="modal-overlay"
      @click="closeBookingDetails"
    >
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>预约详情</h3>
          <button class="modal-close" @click="closeBookingDetails">×</button>
        </div>
        <div class="modal-body">
          <div class="info-title">预约信息</div>
          <div class="booking-details">
            <div class="detail-item">
              <span class="detail-label">预约时间：</span>
              <div class="detail-value">
                <p>{{ currentDate }}</p>
                <p>{{ timeOptions }}</p>
              </div>
            </div>
            <div class="detail-item">
              <span class="detail-label">预约校区（园）：</span>
              <span class="detail-value">广州校区北校园</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">预约人姓名：</span>
              <span class="detail-value">郭锐祥</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">证件号码：</span>
              <span class="detail-value">445293200004273256</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">联系电话：</span>
              <span class="detail-value">13800138000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// 导入图片资源
import homeImage from "../assets/home.png";
import homeActiveImage from "../assets/home-active.png";
import messageImage from "../assets/message.png";
import messageActiveImage from "../assets/message-active.png";

// 获取当前日期
const currentDate = ref("");
const timeOptions = ref("08:00~18:00");
const selectedTime = ref("");

// 生成当前日期和时间选项
onMounted(() => {
  // 获取当前日期并格式化
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  currentDate.value = `${year}-${month}-${day}`;
});

// 预约系统页面逻辑
function closePage() {
  window.close();
}

// 弹窗控制
const showBookingDetails = ref(false);

function openBookingDetails() {
  showBookingDetails.value = true;
}

function closeBookingDetails() {
  showBookingDetails.value = false;
}

// 导航栏控制
const activeNav = ref("home");

function switchNav(nav) {
  activeNav.value = nav;
}
</script>

<style scoped>
/* 全局样式 */
.booking-container {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.14rem; /* 14px */
  padding-bottom: 0.6rem; /* 为底部固定导航栏留出空间 */
  overflow-y: auto; /* 内容超出时可滚动 */
}

/* 顶部状态栏 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 0.2rem; /* 10px 20px */
  background-color: #005815;
  color: white;
  font-size: 0.16rem; /* 16px */
}

.header-icons {
  display: flex;
  gap: 0.1rem; /* 10px */
  font-size: 0.18rem; /* 18px */
}

/* 学校信息栏 */
.school-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  overflow: hidden;
  padding: 0.25rem 0 0.1rem 0; /* 25px */
  background-color: #005815;
  z-index: 99;
}

.school-image {
  width: 100%;
  height: auto;
  display: block;
}

/* 用户信息区域 */
.user-section {
  display: flex;
  justify-content: center;
  background-color: #005815;
  border-radius: 0 0 0.1rem 0.1rem; /* 10px */
  box-shadow: 0 0.02rem 0.05rem rgba(0, 0, 0, 0.1);
  padding-top: 0.668rem;
}

.user-image {
  width: 100%;
  height: auto;
  display: block;
}

/* 预约信息区域 */
.booking-info {
  padding: 0.15rem 0; /* 15px */
  text-align: center;
}

.info-title {
  font-size: 0.16rem; /* 16px */
  color: #8a8b8a;
  margin-bottom: 0.1rem; /* 10px */
  font-weight: 500;
}

.campus-info {
  font-size: 0.16rem; /* 14px */
  background-color: #e9f5ef;
  padding: 0.08rem 0;
}

/* 二维码区域 */
.qr-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.1rem 0.15rem 0 0.15rem;
}

.qr-container {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background-color: #007c36;
  border-radius: 0.1rem;
  box-shadow: 0 0.02rem 0.1rem rgba(0, 0, 0, 0.1);
}

.qr-illustration {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.member-image {
  width: auto;
  height: 80%;
  max-width: 100%;
  position: absolute;
  bottom: 0;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.qr-code {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #00e27f, #00ace5, #00e27f, #00ace5);
  background-size: 400% 400%;
  animation: gradientAnimation 3s ease infinite;
  padding: 0.05rem;
  border-radius: 0.05rem;
  /* height: 2.5rem; */
}

.qr-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: white;
  border-radius: 0.02rem;
}

.qr-label {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 2.5rem; */
  writing-mode: vertical-rl;
  font-size: 0.16rem;
  color: white;
  font-weight: bold;
  letter-spacing: 0.1rem;
}

.view-booking-btn {
  padding-top: 0.2rem;
  background-color: #f4fff9;
  color: white;
  width: auto;
  height: auto;
  max-width: 100%;
  border: none;
  cursor: pointer;
  display: block;
}

/* 校园背景 */
.campus-bg {
  margin: 0 0.2rem; /* 20px */
  height: 1.5rem; /* 150px */
  background-color: #f0f0f0;
  border-radius: 0.1rem; /* 10px */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.48rem; /* 48px */
  position: relative;
  overflow: hidden;
}

.building {
  font-size: 0.24rem; /* 24px */
}

/* 便民服务指引 */
.service-guide {
  position: fixed;
  bottom: 1rem; /* 30px */
  right: 0.07rem;
  color: white;
  border-radius: 0.2rem 0.2rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 90; /* 确保在导航栏上方 */
  width: 1rem; /* 180px */
  height: 1rem; /* 180px */
}

.service-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* 底部导航 */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 0 0.15rem; /* 15px 0 */
  border-top: 0.01rem solid #eee;
  z-index: 100;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.05rem; /* 5px */
  padding: 0.1rem; /* 10px */
  cursor: pointer;
  color: #818f89;
}

.nav-item.active {
  color: #007c36;
}

.nav-item {
  transition: all 0.3s ease;
}

.nav-icon {
  width: 0.24rem; /* 24px */
  height: 0.24rem;
  object-fit: contain;
}

.nav-text {
  font-size: 0.12rem; /* 12px */
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 0.1rem;
  width: 87%;
  max-width: 400px;
  box-shadow: 0 0.05rem 0.2rem rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.15rem;
  border-bottom: 0.01rem solid #eafef3;
  background: linear-gradient(180deg, #ebfff5 0%, #ffffff 100%);
  color: #333;
  border-radius: 0.1rem 0.1rem 0 0;
}

.modal-header h3 {
  margin: 0;
  font-size: 0.18rem;
  flex: 1;
}

.modal-close {
  background: none;
  border: none;
  color: #333;
  font-size: 0.24rem;
  cursor: pointer;
  padding: 0;
  width: 0.3rem;
  height: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-body {
  padding: 0.15rem;
}

.info-title {
  font-size: 0.18rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.15rem;
}

.booking-details {
  margin-bottom: 0.2rem;
  background-color: #f5f5f5;
  padding: 0.15rem;
  border-radius: 0.1rem;
}

.detail-item {
  margin-bottom: 0.15rem;
  display: flex;
  font-size: 0.16rem;
}

.detail-label {
  color: #666;
  width: 1rem;
  margin-right: 0.1rem;
  flex-shrink: 0;
}

.detail-value {
  color: #121413;
  font-weight: 400;
}

.line {
  width: 100%;
  height: 0.05rem;
  background-color: #ebf1f7;
}

/* 预约功能列表样式 */
.booking-functions {
  display: flex;
  flex-direction: column;
  padding: 0.15rem;
  gap: 0.1rem;
}

.function-item {
  display: flex;
  align-items: center;
  padding: 0.15rem;
  background: linear-gradient(180deg, #e6fff3 0%, #ffffff 100%);
  border-radius: 0.1rem;
}

.function-icon {
  width: 0.24rem;
  height: 0.24rem;
  margin-right: 0.1rem;
  background-color: #f8fffc;
  border: 1px solid #e8f4ec;
  border-radius: 0.04rem;
}

.function-text {
  flex: 1;
  font-size: 0.16rem;
  color: #333;
}

.function-arrow {
  font-size: 0.18rem;
  color: #aaa;
}
</style>
