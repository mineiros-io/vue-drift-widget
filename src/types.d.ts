// Drift API types
declare class Drift {
  invoked: boolean
  SNIPPET_VERSION: string
  api: DriftAPI
  allFramesReady: boolean
  apiReady: boolean
  controllerReady: boolean
  hasInitialized: boolean
  chatReady: boolean
  debug(): void
  config(config: DriftWidgetConfig): void
  init(embedId: string): void
  load(widgetId: string): void
  unload(): void
  hide(): void
  show(): void
  reset(): void
  page(name: string): void
  identify(userId: string, attributes: DriftUser): void
  track(event: string, attributes: Record<string, unknown>[]): void
  on(
    event: 'ready',
    callback: (
      api: DriftAPI,
      payload: {
        isOnline: boolean
        sidebarOpen: boolean
        teamAvailability: Record<string, unknown>[]
      },
    ) => void,
  ): void
}

type DriftWidgetConfig = {
  locale?: string
  messages?: {
    welcomeMessage?: string
    awayMessage?: string
    emailCaptureMessage?: string
    thankYouMessage?: string
  }
  enableWelcomeMessage?: boolean
  enableCampaigns?: boolean
  enableChatTargeting?: boolean
  backgroundColor?: string
  foregroundColor?: string
  autoAssignee?: {
    name: string
    title: string
    email: string
    avatarUrl?: string
  }
  inboxId?: number
  cookieDomain?: string
  disableNewConversations?: boolean
}

type DriftUser = {
  email?: string
  nickname?: string
  age?: number
}

declare class DriftAPI {
  goToConversation(conversationId: number): void
  goToConversationList(): void
  goToNewConversation(message: string): void
  hideAwayMessage(): void
  hideChat(): void
  hideWelcomeMessage(): void
  openChat(): void
  scheduleMeeting(driftUserId: number | string): void
  setUserAttributes(attributes: DriftUser): void
  showAwayMessage(): void
  /**
   * @deprecated The method should not be used
   * https://devdocs.drift.com/v1.1/docs/welcome-message
   */
  showWelcomeMessage(message: string): void
  showWelcomeOrAwayMessage(): void
  sidebar: {
    open(): void
    close(): void
    toggle(): void
  }
  startInteraction(interaction: {
    interactionId: number | string
    goToConversation: boolean
  }): void
  startVideoGreeting(): void
  toggleChat(): void
  widget: {
    hide(): void
    show(): void
  }
  // https://devdocs.drift.com/docs/drift-events#email-captured
  on(
    event: 'emailCapture',
    callback: (payload: {
      email: string
      conversationId: number
      playbookId?: number
      interactionId?: number
      campaignId?: number
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#phone-number-captured
  on(
    event: 'phoneCapture',
    callback: (payload: {
      conversationId: number
      messageId: number
      createdAt: number
      authorId: number
      phone: string
      playbookId?: number
      interactionId?: number
      campaignId?: number
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#conversation-started
  on(
    event: 'startConversation',
    callback: (payload: { conversationId: number; inboxId: number }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#conversation-selected
  on(
    event: 'conversation:selected',
    callback: (payload: {
      conversationId: number
      interactionId?: number
      campaignId?: number
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#button-clicked
  on(
    event: 'conversation:buttonClicked',
    callback: (payload: {
      conversationId: number
      messageId: number
      createdAt: number
      authorId: number
      questionId: number
      buttonBody: string
      playbookId?: number
      interactionId?: number
      campaignId?: number
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#first-interaction
  on(
    event: 'conversation:firstInteraction',
    callback: (payload: {
      messageId: number
      createdAt: number
      authorId: number
      conversationId: number
      playbookId?: number
      interactionId?: number
      campaignId?: number
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#playbook-clicked
  on(
    event: 'conversation:playbookClicked',
    callback: (payload: {
      converationId: number
      playbookId?: number
      interactionId?: number
      campaignId?: number
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#playbook-fired
  on(
    event: 'conversation:playbookFired',
    callback: (payload: {
      messageId: number
      createdAt: number
      authorId: number
      conversationId: number
      playbookId?: number
      interactionId?: number
      campaignId?: number
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#playbook-dismissed
  on(
    event: 'conversation:playbookDismissed',
    callback: (payload: {
      converationId: number
      messageId: number
      playbookId?: number
      interactionId?: number
      campaignId?: number
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#meeting-request-sent
  on(
    event: 'scheduling:requestMeeting',
    callback: (payload: {
      teamMember: {
        id: number
        name: string
      }
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#meeting-booked
  on(
    event: 'scheduling:meetingBooked',
    callback: (payload: {
      teamMember: {
        id: number // your team member's Drift ID
        name: string
      }
      meeting: {
        time: number
        duration: number
        timeZone: string
      }
      conversationId: number
      playbookId?: number
      interactionId?: number
      campaignId?: number
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#meeting-request-sent
  on(
    event: 'welcomeMessage:open' | 'welcomeMessage:close',
    callback: () => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#away-message-events
  on(
    event: 'awayMessage:open' | 'awayMessage:close',
    callback: () => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#conversation-selected
  on(
    event: 'message',
    callback: (payload: {
      conversationid: number
      inboxid: number
      teammember: {
        id: number
        name: string
      }
      playbookid?: number
      interactionid?: number
      campaignid?: number
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#user-sent-a-message
  on(
    event: 'message:sent',
    callback: (payload: {
      conversationId: number
      inboxId: number
      playbookId?: number
      interactionId?: number
      campaignId?: number
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#campaign-events
  on(
    event:
      | 'campaign:click'
      | 'campaign:submit'
      | 'campaign:open'
      | 'campaign:dismiss',
    callback: (payload: {
      data: {
        widgetVisible: boolean
        isOnline: boolean
      }
      campaignId: number
    }) => void,
  ): void
  //https://devdocs.drift.com/docs/drift-events#slider-message-events
  on(
    event: 'sliderMessage:close',
    callback: (payload: {
      botMessage: boolean
      playbookId?: number
      interactionId?: number
      campaignId?: number
    }) => void,
  ): void
  // https://devdocs.drift.com/docs/drift-events#chat-events
  on(event: 'chatOpen' | 'chatClose', callback: () => void): void
  // https://devdocs.drift.com/docs/drift-events#meeting-request-sent
  on(
    event: 'gdprClicked',
    callback: (payload: {
      teamMember: {
        accepted: boolean
        endUser: number
      }
    }) => void,
  ): void
}

export { Drift, DriftAPI, DriftUser, DriftWidgetConfig }
