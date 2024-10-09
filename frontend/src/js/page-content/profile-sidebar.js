import { getProfiles } from "../database/database";

// 获取 HTML 元素
const avatarElement = document.querySelector(".profile-avatar");
const nameElement = document.querySelector(".profile-name");
const emailElement = document.querySelector(".profile-email");
const descriptionElement = document.querySelector(".profile-description");
const constellationElement = document.querySelector(".profile-constellation");
const mbtiElement = document.querySelector(".profile-mbti");
const hobbyElement = document.querySelector(".profile-hobby");
const linkedElement = document.querySelector(".profile-linked");
const xElement = document.querySelector(".profile-x");
const wechatElement = document.querySelector(".profile-weChat");

export const refreshProfileSidebarData = async () => {
  const profiles = await getProfiles();
  console.log(profiles);
  const mainUserProfile = profiles[0]; // 获取第一个用户的信息

  // 更新元素内容
  avatarElement.src = mainUserProfile.avatar; // 设置头像
  nameElement.textContent = mainUserProfile.name; // 设置名字
  emailElement.textContent = mainUserProfile.email; // 设置邮箱
  descriptionElement.textContent = mainUserProfile.description; // 设置描述

  // 设置其他信息
  constellationElement.textContent = mainUserProfile.constellation;
  mbtiElement.textContent = mainUserProfile.mbti;
  hobbyElement.textContent = mainUserProfile.hobby;
  linkedElement.textContent = mainUserProfile.linked;
  xElement.textContent = mainUserProfile.x;
  wechatElement.textContent = mainUserProfile.wechat;
};

// refreshProfileSidebarData();
