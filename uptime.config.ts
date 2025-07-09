import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "AniKenji's Status Page",
  links: [
    { link: 'https://github.com/NakamuraKobayashi', label: 'GitHub' },
    { link: 'mailto:supports@phamhung.xyz', label: 'Email Me', highlight: true },
  ],
  group: {
    '🌐 Public': ['anikenji_movie'],
    '🔐 Private Servers': [''],
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'anikenji_movie',
      name: 'AniKenji Movie',
      method: 'GET',
      target: 'https://phamhung.xyz',
      tooltip: 'School project',
      statusPageLink: 'https://uptime.phamhung.xyz',
      expectedCodes: [200],
      timeout: 10000,
      hideLatencyChart: false,
    },
  ],
  notification: {
    appriseApiServer: 'https://apprise.example.com/notify', // <-- sửa lại URL thật nếu dùng
    recipientUrl: 'tgram://YOUR_BOT_TOKEN/YOUR_CHAT_ID',    // <-- thay bằng thông tin Telegram của bạn
    timeZone: 'Asia/Ho_Chi_Minh',
    gracePeriod: 5,
    skipNotificationIds: [],
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // Tùy chọn xử lý khi có thay đổi trạng thái
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // Tùy chọn xử lý khi sự cố đang diễn ra
    },
  },
}

const maintenances: MaintenanceConfig[] = [
  {
    monitors: ['anikenji_movie'],
    title: 'Bảo trì website',
    body: 'Nâng cấp phần mềm máy chủ phamhung.xyz',
    start: '2025-07-12T00:00:00+07:00',
    end: '2025-07-12T03:00:00+07:00',
    color: 'blue',
  },
]

export { pageConfig, workerConfig, maintenances }
