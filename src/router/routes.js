const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "/",
        name: "Login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "/up",
        name: "Signup",
        component: () => import("pages/SignupPage.vue"),
      },
    ],
  },
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "template",
        name: "Template",
        component: () => import("pages/TemplatePage.vue"),
      },
    ],
  },
  {
    path: "/edit",
    component: () => import("layouts/EditLayout.vue"),
    children: [
      {
        path: "",
        name: "Edit",
        component: () => import("pages/EditPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
