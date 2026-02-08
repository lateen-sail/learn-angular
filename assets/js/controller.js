angular.module("app", []).controller("MainController", function ($scope) {
  $scope.items = [
    {
      label: "Languages",
      values: [
        {
          label: "JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { label: "TypeScript", url: "https://www.typescriptlang.org" },
        { label: "Python", url: "https://www.python.org" },
        { label: "Go", url: "https://go.dev" },
        { label: "Ruby", url: "https://www.ruby-lang.org" },
        { label: "PHP", url: "https://www.php.net" },
        { label: "Java", url: "https://www.oracle.com/java/" },
        {
          label: "C#",
          url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        },
        { label: "Rust", url: "https://www.rust-lang.org" },
        { label: "Kotlin", url: "https://kotlinlang.org" },
        {
          label: "CSS",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        { label: "Sass", url: "https://sass-lang.com" },
      ],
    },
    {
      label: "Frontend",
      values: [
        { label: "React", url: "https://react.dev" },
        { label: "Vue.js", url: "https://vuejs.org" },
        { label: "Angular", url: "https://angular.dev" },
        { label: "Svelte", url: "https://svelte.dev" },
        { label: "Ember.js", url: "https://emberjs.com" },
        { label: "SolidJS", url: "https://www.solidjs.com" },
        { label: "Qwik", url: "https://qwik.builder.io" },
      ],
    },
    {
      label: "Backend",
      values: [
        { label: "Express.js", url: "https://expressjs.com" },
        { label: "Django", url: "https://www.djangoproject.com" },
        { label: "Flask", url: "https://flask.palletsprojects.com" },
        { label: "Laravel", url: "https://laravel.com" },
        { label: "Ruby on Rails", url: "https://rubyonrails.org" },
        { label: "NestJS", url: "https://nestjs.com" },
        { label: "FastAPI", url: "https://fastapi.tiangolo.com" },
        { label: "Spring Boot", url: "https://spring.io/projects/spring-boot" },
        {
          label: "ASP.NET Core",
          url: "https://learn.microsoft.com/en-us/aspnet/core",
        },
      ],
    },
    {
      label: "UI",
      values: [
        { label: "Bootstrap", url: "https://getbootstrap.com" },
        { label: "Tailwind CSS", url: "https://tailwindcss.com" },
        { label: "Foundation", url: "https://get.foundation" },
        { label: "Bulma", url: "https://bulma.io" },
        { label: "Materialize", url: "https://materializecss.com" },
        { label: "Semantic UI", url: "https://semantic-ui.com" },
        { label: "Ant Design", url: "https://ant.design" },
        { label: "Chakra UI", url: "https://chakra-ui.com" },
        { label: "MUI", url: "https://mui.com" },
        { label: "Radix UI", url: "https://www.radix-ui.com" },
        { label: "Mantine", url: "https://mantine.dev" },
        { label: "Headless UI", url: "https://headlessui.com" },
      ],
    },
    {
      label: "Build",
      values: [
        { label: "Vite", url: "https://vitejs.dev" },
        { label: "Webpack", url: "https://webpack.js.org" },
        { label: "Rollup", url: "https://rollupjs.org" },
        { label: "Parcel", url: "https://parceljs.org" },
        { label: "esbuild", url: "https://esbuild.github.io" },
        { label: "Turbopack", url: "https://turbo.build/pack" },
        { label: "SWC", url: "https://swc.rs" },
      ],
    },
    {
      label: "Meta",
      values: [
        { label: "Create React App", url: "https://create-react-app.dev" },
        { label: "Next.js", url: "https://nextjs.org" },
        { label: "Gatsby", url: "https://www.gatsbyjs.com" },
        { label: "Nuxt", url: "https://nuxt.com" },
        { label: "Remix", url: "https://remix.run" },
        { label: "Astro", url: "https://astro.build" },
      ],
    },
    {
      label: "Databases",
      values: [
        { label: "MySQL", url: "https://www.mysql.com" },
        { label: "PostgreSQL", url: "https://www.postgresql.org" },
        { label: "MongoDB", url: "https://www.mongodb.com" },
        {
          label: "Firebase Realtime Database",
          url: "https://firebase.google.com/products/realtime-database",
        },
        {
          label: "Firebase Cloud Firestore",
          url: "https://firebase.google.com/products/firestore",
        },
        { label: "SQLite", url: "https://www.sqlite.org" },
        { label: "Redis", url: "https://redis.io" },
        { label: "Supabase", url: "https://supabase.com" },
        { label: "PlanetScale", url: "https://planetscale.com" },
      ],
    },
    {
      label: "Runtime",
      values: [
        { label: "Node.js", url: "https://nodejs.org" },
        { label: "Deno", url: "https://deno.com" },
        { label: "Bun", url: "https://bun.sh" },
      ],
    },
    {
      label: "Desktop",
      values: [
        { label: "Electron", url: "https://www.electronjs.org" },
        { label: "NW.js", url: "https://nwjs.io" },
      ],
    },
    {
      label: "APIs",
      values: [
        {
          label: "Fetch API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
        },
        {
          label: "Geolocation API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API",
        },
        {
          label: "Web Storage API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
        },
        {
          label: "WebSockets API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
        },
        {
          label: "Canvas API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
        },
        {
          label: "IndexedDB API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",
        },
        {
          label: "WebRTC API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API",
        },
        {
          label: "Service Workers API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",
        },
        {
          label: "Intersection Observer API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
        },
        {
          label: "Resize Observer API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",
        },
      ],
    },
    {
      label: "Infrastructure",
      values: [
        { label: "Docker", url: "https://www.docker.com" },
        { label: "Kubernetes", url: "https://kubernetes.io" },
        { label: "Vagrant", url: "https://www.vagrantup.com" },
        { label: "VirtualBox", url: "https://www.virtualbox.org" },
        { label: "VMware", url: "https://www.vmware.com" },
        {
          label: "Hyper-V",
          url: "https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/",
        },
        { label: "Proxmox", url: "https://www.proxmox.com" },
        { label: "Terraform", url: "https://www.terraform.io" },
        { label: "Ansible", url: "https://www.ansible.com" },
      ],
    },
    {
      label: "Libraries",
      values: [
        { label: "Lodash", url: "https://lodash.com" },
        { label: "Moment.js", url: "https://momentjs.com" },
        { label: "Axios", url: "https://axios-http.com" },
        { label: "D3.js", url: "https://d3js.org" },
        { label: "Chart.js", url: "https://www.chartjs.org" },
        { label: "Three.js", url: "https://threejs.org" },
        { label: "Redux", url: "https://redux.js.org" },
        { label: "TanStack Query", url: "https://tanstack.com/query" },
        { label: "Zod", url: "https://zod.dev" },
        { label: "Day.js", url: "https://day.js.org" },
        { label: "Framer Motion", url: "https://www.framer.com/motion/" },
      ],
    },
    {
      label: "Hosting",
      values: [
        { label: "Netlify", url: "https://www.netlify.com" },
        { label: "Vercel", url: "https://vercel.com" },
        { label: "Heroku", url: "https://www.heroku.com" },
        { label: "DigitalOcean", url: "https://www.digitalocean.com" },
        {
          label: "Firebase Hosting",
          url: "https://firebase.google.com/products/hosting",
        },
        { label: "Cloudflare Pages", url: "https://pages.cloudflare.com" },
        { label: "Fly.io", url: "https://fly.io" },
      ],
    },
    {
      label: "Storage",
      values: [
        { label: "AWS S3", url: "https://aws.amazon.com/s3/" },
        {
          label: "Google Cloud Storage",
          url: "https://cloud.google.com/storage",
        },
        {
          label: "Azure Blob Storage",
          url: "https://azure.microsoft.com/en-us/products/storage/blobs/",
        },
        {
          label: "Cloudflare R2",
          url: "https://developers.cloudflare.com/r2/",
        },
      ],
    },
    {
      label: "AWS",
      values: [
        { label: "EC2", url: "https://aws.amazon.com/ec2/" },
        { label: "RDS", url: "https://aws.amazon.com/rds/" },
        { label: "Lambda", url: "https://aws.amazon.com/lambda/" },
        { label: "DynamoDB", url: "https://aws.amazon.com/dynamodb/" },
        { label: "CloudFront", url: "https://aws.amazon.com/cloudfront/" },
        { label: "SQS", url: "https://aws.amazon.com/sqs/" },
        { label: "API Gateway", url: "https://aws.amazon.com/api-gateway/" },
        { label: "ECS", url: "https://aws.amazon.com/ecs/" },
        { label: "EKS", url: "https://aws.amazon.com/eks/" },
      ],
    },
    {
      label: "Versioning",
      values: [
        { label: "Git", url: "https://git-scm.com" },
        { label: "Subversion (SVN)", url: "https://subversion.apache.org" },
        { label: "Mercurial", url: "https://www.mercurial-scm.org" },
        { label: "Perforce", url: "https://www.perforce.com" },
        { label: "Bazaar", url: "https://bazaar.canonical.com" },
        { label: "CVS", url: "https://www.nongnu.org/cvs/" },
        { label: "Fossil", url: "https://fossil-scm.org" },
      ],
    },
    {
      label: "Design",
      values: [
        { label: "Figma", url: "https://www.figma.com" },
        { label: "Sketch", url: "https://www.sketch.com" },
        { label: "Adobe XD", url: "https://www.adobe.com/products/xd.html" },
        { label: "InVision", url: "https://www.invisionapp.com" },
        { label: "Zeplin", url: "https://zeplin.io" },
        { label: "Balsamiq", url: "https://balsamiq.com" },
        { label: "Marvel", url: "https://marvelapp.com" },
        { label: "FigJam", url: "https://www.figma.com/figjam/" },
        { label: "Miro", url: "https://miro.com" },
      ],
    },
  ];
  $scope.selectedItems = {};
  $scope.updateSelectedItems = function (label, value, isChecked) {
    if (isChecked) {
      if (!$scope.selectedItems[label]) {
        $scope.selectedItems[label] = [];
      }
      if ($scope.selectedItems[label].indexOf(value) === -1) {
        $scope.selectedItems[label].push(value);
      }
    } else {
      if ($scope.selectedItems[label]) {
        const index = $scope.selectedItems[label].indexOf(value);
        if (index > -1) {
          $scope.selectedItems[label].splice(index, 1);
          if ($scope.selectedItems[label].length === 0) {
            delete $scope.selectedItems[label];
          }
        }
      }
    }
  };

  /* --------------
  - Clipboard
  -------------- */
  $scope.copyToClipboard = async function () {
    const rows = document.querySelectorAll(".js-copy-row");
    let textToCopy = "";

    // ラベルと値をフォーマットしてテキストを生成
    rows.forEach(function (row) {
      const label = row.querySelector(".js-copy-title").textContent.trim();
      const values = row.querySelectorAll(".js-copy-item");
      const valueText = Array.from(values)
        .map(function (value) {
          return value.textContent.trim();
        })
        .join(" / ");

      textToCopy += label + "\n" + valueText + "\n";
    });

    // Clipboard APIを使用してテキストをコピー
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // ボタンにイベントリスナーを追加
  document
    .querySelector(".js-copy-btn")
    .addEventListener("click", $scope.copyToClipboard);
});
