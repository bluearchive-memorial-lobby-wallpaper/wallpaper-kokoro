import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-kokoro",
  slug: "kokoro",
  title: "Kokoro",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja"];

export const BGM = {
  title: "Track 300",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 17.666667938232422,
    "lines": [
      {
        "id": "ch0368_memoriallobby_1_1",
        "text": {
          "zh-cn": "",
          "ja": "はぁ……あったまる……。",
          "ko": "",
          "en": ""
        }
      },
      {
        "id": "ch0368_memoriallobby_1_2",
        "text": {
          "zh-cn": "",
          "ja": "水上に上がってからの一杯は……格別です。",
          "ko": "",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 15.666667938232422,
    "lines": [
      {
        "id": "ch0368_memoriallobby_2_1",
        "text": {
          "zh-cn": "",
          "ja": "あ……先生のお口にあいましたか？",
          "ko": "",
          "en": ""
        }
      },
      {
        "id": "ch0368_memoriallobby_2_2",
        "text": {
          "zh-cn": "",
          "ja": "味が濃すぎたり、薄すぎたり、していませんか……？",
          "ko": "",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 28.33333396911621,
    "lines": [
      {
        "id": "ch0368_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "よかった……。……隠し味、ですか？",
          "ko": "",
          "en": ""
        }
      },
      {
        "id": "ch0368_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "特別なことは何も……ネットで見たレシピ通りに作っています。あさりの砂抜きをして……アクをとって……。",
          "ko": "",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 19.33333396911621,
    "lines": [
      {
        "id": "ch0368_memoriallobby_4_1",
        "text": {
          "zh-cn": "",
          "ja": "あ、でも……そうですね。",
          "ko": "",
          "en": ""
        }
      },
      {
        "id": "ch0368_memoriallobby_4_2",
        "text": {
          "zh-cn": "",
          "ja": "飲んでくれる人のことを想って、いつもより丁寧に作ったところは――",
          "ko": "",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 11.000000953674316,
    "lines": [
      {
        "id": "ch0368_memoriallobby_5",
        "text": {
          "zh-cn": "",
          "ja": "あっ……な、なんちゃって。",
          "ko": "",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 6,
    "motionAnimation": "Talk_06_M",
    "attachmentAnimation": "Talk_06_A",
    "duration": 20.000001907348633,
    "lines": [
      {
        "id": "ch0368_memoriallobby_6_1",
        "text": {
          "zh-cn": "",
          "ja": "え？私の作ったお味噌汁を、毎朝飲みたい……？",
          "ko": "",
          "en": ""
        }
      },
      {
        "id": "ch0368_memoriallobby_6_2",
        "text": {
          "zh-cn": "",
          "ja": "せ、先生……それって……。",
          "ko": "",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 7,
    "motionAnimation": "Talk_07_M",
    "attachmentAnimation": "Talk_07_A",
    "duration": 23.666667938232422,
    "lines": [
      {
        "id": "ch0368_memoriallobby_7_1",
        "text": {
          "zh-cn": "",
          "ja": "あ、いえ……こ、困ってるとかでは……。",
          "ko": "",
          "en": ""
        }
      },
      {
        "id": "ch0368_memoriallobby_7_2",
        "text": {
          "zh-cn": "",
          "ja": "……はい。先生が、お望みでしたら……私は、構いませんよ。",
          "ko": "",
          "en": ""
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
