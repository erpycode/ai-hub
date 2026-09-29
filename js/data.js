// ═══════════════════════════════════════════
//  AI HUB — DATA & CONFIGURATION (VERIFIED)
// ═══════════════════════════════════════════

// Ratings: easeOfUse, quality, features, priceValue, speed (1-10)
const defaultRatings = {
  // ─── Coding ───
  'GitHub Copilot':    [7, 9, 9, 6, 9],
  'Cursor':            [8, 9, 9, 7, 8],
  'Windsurf':          [8, 8, 8, 7, 8],
  'Supermaven':        [9, 9, 7, 9, 10],
  'Tabnine':           [8, 8, 7, 8, 9],
  'ChatGPT':           [9, 8, 9, 8, 8],
  'DeepSeek':          [8, 8, 7, 10, 8],
  'Replit Agent':      [9, 7, 7, 7, 7],
  'Codeium':           [8, 7, 7, 10, 8],
  'Continue.dev':      [8, 8, 8, 10, 8],
  'Cody':              [8, 8, 8, 7, 8],
  'DeepSeek Coder':    [7, 9, 9, 10, 8],
  'Qwen Coder':        [7, 9, 8, 10, 8],

  // ─── Image ───
  'Midjourney':        [8, 10, 8, 6, 7],
  'DALL-E 3':          [9, 9, 8, 7, 8],
  'Stable Diffusion':  [6, 8, 10, 10, 6],
  'Leonardo AI':       [8, 8, 8, 8, 7],
  'Ideogram':          [8, 8, 7, 8, 7],
  'Flux':              [7, 9, 7, 8, 9],
  'Canva AI':          [10, 7, 8, 8, 8],
  'Adobe Firefly':     [8, 9, 8, 6, 7],
  'Playground AI':     [8, 8, 7, 9, 8],
  'Microsoft Designer':[9, 7, 7, 10, 8],
  'Recraft':           [7, 9, 8, 8, 7],

  // ─── Video ───
  'Runway ML':         [7, 9, 9, 5, 7],
  'Kling':             [8, 8, 7, 7, 7],
  'Pika':              [8, 7, 7, 8, 8],
  'Sora':              [7, 10, 9, 4, 6],
  'CapCut AI':         [9, 7, 8, 10, 8],
  'Synthesia':         [8, 8, 8, 5, 7],
  'HeyGen':            [8, 8, 8, 6, 7],
  'Higgsfield':        [8, 9, 9, 7, 8],
  'Magic Hour':        [8, 8, 8, 7, 8],
  'Luma AI':           [7, 9, 9, 7, 7],
  'Hailuo AI (Minimax)': [8, 9, 8, 8, 8],
  'Genmo':             [7, 8, 7, 8, 7],

  // ─── Audio ───
  'ElevenLabs':        [8, 10, 9, 7, 8],
  'Suno':              [9, 8, 8, 8, 7],
  'Udio':              [8, 9, 7, 8, 7],
  'Bark':              [5, 7, 7, 10, 5],
  'AIVA':              [7, 8, 8, 7, 6],
  'Riffusion':         [8, 7, 6, 10, 8],
  'Murf AI':           [8, 8, 7, 7, 8],
  'WellSaid Labs':     [7, 9, 7, 5, 7],
  'Soundraw':          [8, 7, 8, 7, 7],

  // ─── Text ───
  'Claude':            [9, 9, 8, 8, 8],
  'Gemini':            [9, 8, 8, 8, 9],
  'Jasper':            [8, 8, 8, 5, 7],
  'Writesonic':        [8, 7, 8, 7, 8],
  'Grammarly':         [9, 7, 7, 8, 9],
  'Copy.ai':           [8, 7, 8, 7, 8],
  'Rytr':              [8, 7, 7, 9, 8],

  // ─── Data ───
  'Julius AI':         [9, 8, 7, 7, 7],
  'NotebookLM':        [9, 8, 7, 10, 8],
  'Rows.com':          [8, 8, 9, 8, 8],
  'Hex':               [7, 9, 9, 7, 8],
  'PandasAI':          [7, 8, 8, 10, 8],
  'Obviously AI':      [9, 7, 7, 6, 7],

  // ─── Agents (Automation) ───
  'AutoGPT':           [5, 7, 8, 10, 5],
  'CrewAI':            [6, 8, 9, 10, 6],
  'Botpress':          [8, 7, 8, 8, 7],
  'n8n':               [7, 8, 9, 8, 7],
  'Make (Integromat)': [8, 7, 8, 8, 8],
  'Dify':              [7, 8, 9, 8, 7],
  'LangChain':         [6, 9, 10, 10, 6],
  'LlamaIndex':        [6, 9, 9, 10, 7],
  'Flowise':           [8, 7, 8, 9, 7],

  // ─── Search ───
  'Perplexity':        [9, 9, 8, 8, 9],
  'Phind':             [8, 8, 7, 8, 9],
  'Genspark':          [8, 9, 9, 9, 8],
  'Exa.ai':            [7, 9, 8, 8, 9],
  'You.com':           [8, 7, 7, 8, 8],
  'Kagi':              [8, 9, 7, 5, 9],
  'Andi Search':       [8, 8, 7, 9, 9],

  // ─── Platforms ───
  'Google AI Studio':  [8, 9, 9, 10, 9],
  'Hugging Face':      [6, 9, 10, 10, 7],
  'LM Arena':          [9, 8, 7, 10, 8],
  'Ollama':            [7, 8, 8, 10, 8],
  'Groq':              [8, 8, 7, 9, 10],
  'OpenRouter':        [7, 8, 8, 9, 8],
  'Replicate':         [7, 8, 9, 8, 8],
  'Together AI':       [7, 8, 8, 9, 9],
  'Anyscale':          [6, 9, 9, 8, 8],
  'DeepInfra':         [7, 8, 8, 9, 9],
  'Fireworks AI':      [7, 8, 8, 9, 9],

  // ─── Professional CLI Agents ───
  'Hermes Agent':      [7, 9, 9, 8, 8],
  '9Router':           [8, 8, 9, 10, 9],
  'Claude Code':       [7, 10, 8, 5, 8],
  'Cline':             [8, 9, 10, 10, 9],
  'Aider':             [7, 9, 9, 9, 8],

  // ─── Genuine Hidden Gems ───
  'v0.dev':            [8, 10, 9, 8, 9],
  'Bolt.new':          [9, 9, 10, 8, 8],
  'Pinokio':           [9, 8, 9, 10, 8],
  'Upscayl':           [9, 9, 8, 10, 8],
  'Krea AI':           [8, 9, 9, 8, 9],
  'Whisper WebGPU':    [9, 8, 8, 10, 9]
};

const ratingLabels = ['سادگی', 'کیفیت', 'امکانات', 'ارزش قیمت', 'سرعت'];

const categories = [
  {
    id: 'coding',
    emoji: '🖥️',
    name: 'کدنویسی و برنامه‌نویسی',
    desc: 'بهترین ابزارها برای نوشتن کد، دیباگ، و توسعه نرم‌افزار',
    tools: [
      { name: 'GitHub Copilot', desc: 'پیشنهاد کد هوشمند در VS Code و JetBrains', icon: '🐙', pricing: 'paid', level: 'pro', url: 'https://github.com/features/copilot', features: ['تکمیل خودکار کد', 'پشتیبانی چند زبان', 'ادغام با IDE'] },
      { name: 'Cursor', desc: 'ادیتور کد با AI اختصاصی، سریع و دقیق بر پایه VS Code', icon: '⚡', pricing: 'freemium', level: 'pro', url: 'https://cursor.sh', features: ['ادیتور هوشمند', 'Chat با کد', 'تغییر کد با دستور'] },
      { name: 'Windsurf', desc: 'ادیتور AI نسل جدید Codeium با درک جریان کد (Flows)', icon: '🏄', pricing: 'freemium', level: 'pro', url: 'https://codeium.com/windsurf', features: ['درک جریان کد', 'ایجنت خودکار Cascade', 'رایگان در شروع'] },
      { name: 'Supermaven', desc: 'سریع‌ترین ابزار تکمیل کد جهان با بافر ۱ میلیون توکن', icon: '🚀', pricing: 'freemium', level: 'pro', url: 'https://supermaven.com', features: ['فوق‌العاده سریع', 'حافظه ۱ میلیون توکن', 'ادغام با VS Code'] },
      { name: 'Tabnine', desc: 'دستیار هوشمند تکمیل کد متمرکز بر حریم خصوصی و امنیت داده‌ها', icon: '🤖', pricing: 'freemium', level: 'beginner', url: 'https://tabnine.com', features: ['حفظ کامل حریم خصوصی کد', 'ادغام با انواع IDEها', 'پلن پایه رایگان'] },
      { name: 'DeepSeek', desc: 'مدل استدلال و کدنویسی قوی و فوق‌العاده ارزان/رایگان', icon: '🔮', pricing: 'free', level: 'beginner', url: 'https://chat.deepseek.com', features: ['رایگان', 'استدلال عمیق R1', 'قدرت حل مسائل پیچیده'] },
      { name: 'Replit Agent', desc: 'ساخت اپ کامل فقط با توضیح متنی و دیپلوی خودکار', icon: '🔄', pricing: 'freemium', level: 'beginner', url: 'https://replit.com', features: ['بدون نصب', 'استقرار خودکار', 'مناسب مبتدی'] },
      { name: 'Codeium', desc: 'تکمیل کد رایگان برای انواع ادیتورها', icon: '🆓', pricing: 'free', level: 'beginner', url: 'https://codeium.com', features: ['رایگان نامحدود', 'پشتیبانی ۴۰+ زبان', 'سریع و دقیق'] },
      { name: 'Continue.dev', desc: 'افزونه متن‌باز اتصال هر مدل AI به VS Code و JetBrains', icon: '🔄', pricing: 'free', level: 'beginner', url: 'https://continue.dev', features: ['متن‌باز', 'پشتیبانی از Ollama', 'حفظ حریم خصوصی'] },
      { name: 'Cody', desc: 'ایجنت کدنویسی Sourcegraph با درک کل کدبیس پروژه', icon: '🔍', pricing: 'freemium', level: 'pro', url: 'https://sourcegraph.com/cody', features: ['درک عمیق پروژه', 'جستجوی معنایی کد', 'چندین مدل مختلف'] },
      { name: 'DeepSeek Coder', desc: 'بهترین مدل متن‌باز تخصصی کدنویسی در دنیا', icon: '🐉', pricing: 'free', level: 'pro', url: 'https://deepseek.com', features: ['متن‌باز', 'پشتیبانی ۳۳۸ زبان', 'قابلیت اجرای لوکال'] },
      { name: 'Qwen Coder', desc: 'مدل قدرتمند کدنویسی علی‌بابا با دقت بالا', icon: '🦙', pricing: 'free', level: 'pro', url: 'https://qwenlm.github.io', features: ['متن‌باز', 'چند زبانه', 'عملکرد بالا در بنچمارک‌ها'] }
    ]
  },
  {
    id: 'image',
    emoji: '🎨',
    name: 'طراحی و تولید عکس',
    desc: 'ابزارهای ساخت تصویر با هوش مصنوعی',
    tools: [
      { name: 'Midjourney', desc: 'بهترین کیفیت تصویر هنری، عکاسی و خلاقانه در جهان', icon: '🖌️', pricing: 'paid', level: 'beginner', url: 'https://midjourney.com', features: ['کیفیت فوق‌العاده', 'سبک‌های متنوع', 'وب و دیسکورد'] },
      { name: 'DALL-E 3', desc: 'تولید دقیق عکس از متن با فهم جزئیات در ChatGPT', icon: '🎯', pricing: 'freemium', level: 'beginner', url: 'https://openai.com/dall-e-3', features: ['درک متن عالی', 'رایگان در ChatGPT', 'ویرایش بخشی از عکس'] },
      { name: 'Stable Diffusion', desc: 'مدل متن‌باز و بی‌نهایت منعطف، قابل اجرا روی سیستم شخصی', icon: '🌀', pricing: 'free', level: 'pro', url: 'https://stability.ai', features: ['رایگان و متن‌باز', 'کنترل کامل با ControlNet', 'بدون سانسور'] },
      { name: 'Leonardo AI', desc: 'پلتفرم جامع طراحی با ابزارهای تولید عکس و مدل‌های اختصاصی', icon: '🎭', pricing: 'freemium', level: 'beginner', url: 'https://leonardo.ai', features: ['۱۵۰ توکن روزانه رایگان', 'بخش طراحی بوم', 'آموزش مدل شخصی'] },
      { name: 'Ideogram', desc: 'تولید عکس با تایپوگرافی و متن فارسی و انگلیسی بی‌نقص', icon: '📝', pricing: 'freemium', level: 'beginner', url: 'https://ideogram.ai', features: ['رندر عالی متون در تصویر', 'نسخه ۲.۰ فوق‌العاده', 'پلن رایگان روزانه'] },
      { name: 'Flux', desc: 'مدل نسل جدید Black Forest Labs با واقع‌گرایی شگفت‌انگیز', icon: '⚡', pricing: 'freemium', level: 'pro', url: 'https://blackforestlabs.ai', features: ['آناتومی دقیق دست و چهره', 'متن‌باز', 'کیفیت در حد Midjourney'] },
      { name: 'Canva AI', desc: 'طراحی گرافیکی ساده با کمک مجیک استودیو برای سوشال مدیا', icon: '🖼️', pricing: 'freemium', level: 'beginner', url: 'https://canva.com', features: ['رابط بسیار آسان', 'قالب‌های شبکه‌های اجتماعی', 'حذف پس‌زمینه آسان'] },
      { name: 'Adobe Firefly', desc: 'طراحی حرفه‌ای با هوش مصنوعی ادوبی ادغام شده با Photoshop', icon: '🔥', pricing: 'freemium', level: 'pro', url: 'https://firefly.adobe.com', features: ['ادغام با Photoshop', 'امنیت کپی‌رایت تجاری', 'Generative Fill'] },
      { name: 'Playground AI', desc: 'تولید عکس با کیفیت بالا و ویرایش چندلایه', icon: '🎨', pricing: 'freemium', level: 'beginner', url: 'https://playground.com', features: ['تولید تصاویر خلاقانه', 'بوم ویرایش پیشرفته', 'فیلترهای گوناگون'] },
      { name: 'Microsoft Designer', desc: 'طراحی سریع پوستر، بنر و محتوا با AI مایکروسافت', icon: '📐', pricing: 'free', level: 'beginner', url: 'https://designer.microsoft.com', features: ['کاملاً رایگان', 'قالب‌های هوشمند', 'ادغام با DALL-E 3'] },
      { name: 'Recraft', desc: 'طراحی وکتور، آیکون و برندینگ با هوش مصنوعی برداری', icon: '✏️', pricing: 'freemium', level: 'pro', url: 'https://www.recraft.ai', features: ['خروجی SVG وکتور', 'حفظ استایل برند', 'کیفیت گرافیکی بالا'] }
    ]
  },
  {
    id: 'video',
    emoji: '🎬',
    name: 'ساخت ویدیو',
    desc: 'ابزارهای تولید و ویرایش ویدیو با AI',
    tools: [
      { name: 'Runway ML', desc: 'پیشرو در تولید ویدیوی هوش مصنوعی با Gen-3 Alpha', icon: '🎥', pricing: 'paid', level: 'pro', url: 'https://runwayml.com', features: ['Gen-3 Alpha', 'کنترل حرکات دوربین', 'تغییر سبک ویدیو'] },
      { name: 'Kling', desc: 'مدل قدرتمند تولید ویدیو با واقع‌گرایی بالا و فیزیک طبیعی', icon: '🐉', pricing: 'freemium', level: 'beginner', url: 'https://klingai.com', features: ['فیزیک حرکتی واقعی', 'ویدیوهای تا ۱۰ ثانیه', 'اعتبار رایگان اولیه'] },
      { name: 'Pika', desc: 'ساخت ویدیوهای کوتاه خلاقانه و افکت‌های فانتزی Pikaffects', icon: '⚡', pricing: 'freemium', level: 'beginner', url: 'https://pika.art', features: ['افکت‌های خاص مثل آب شدن', 'ساده و سریع', 'امکان صداگذاری خودکار'] },
      { name: 'Sora', desc: 'مدل ویدیویی انقلابی OpenAI با درک فیزیک دنیای واقعی', icon: '🌟', pricing: 'paid', level: 'pro', url: 'https://openai.com/sora', features: ['کیفیت سینمایی', 'مدت زمان طولانی', 'ثبات خارق‌العاده اشیاء'] },
      { name: 'CapCut AI', desc: 'ادیتور ویدیوی محبوب با ابزارهای هوش مصنوعی و زیرنویس خودکار', icon: '✂️', pricing: 'free', level: 'beginner', url: 'https://capcut.com', features: ['رایگان و سریع', 'زیرنویس خودکار چندزبانه', 'افکت‌ها و فیلترهای ترند'] },
      { name: 'Synthesia', desc: 'ساخت ویدیوهای آموزشی و تجاری با آواتارهای سخنگو', icon: '🧑‍💼', pricing: 'paid', level: 'pro', url: 'https://synthesia.io', features: ['آواتارهای بسیار طبیعی', 'پشتیبانی از ۱۲۰+ زبان', 'بدون نیاز به دوربین'] },
      { name: 'HeyGen', desc: 'ترجمه ویدیو با دوبله و لیپ‌سینک دقیق همزمان با صدای خودتان', icon: '👋', pricing: 'paid', level: 'beginner', url: 'https://heygen.com', features: ['ترجمه ویدیو با تغییر لب', 'کلون دقیق صدا', 'ساخت آواتار شخصی'] },
      { name: 'Higgsfield', desc: 'پلتفرم ویدیو و جلوه‌های ویژه سینمایی با کنترل دوربین پیشرفته', icon: '🎬', pricing: 'freemium', level: 'beginner', url: 'https://higgsfield.ai', features: ['حرکات دوربین هالیوودی', 'انیمیت کاراکتر', 'خروجی واقع‌گرایانه'] },
      { name: 'Magic Hour', desc: 'ساخت و تدوین ویدیو با متن، تصویر، تعویض چهره و لیپ‌سینک هوشمند', icon: '✨', pricing: 'freemium', level: 'beginner', url: 'https://magichour.ai', features: ['تولید ویدیو از متن و عکس', 'تعویض چهره (Face Swap)', 'هماهنگ‌سازی لب (Lip Sync)'] },
      { name: 'Luma AI', desc: 'تولید ویدیوهای سینمایی با Dream Machine و اسکن سه‌بعدی', icon: '🌐', pricing: 'freemium', level: 'pro', url: 'https://lumalabs.ai', features: ['Dream Machine سریع', 'اسکن سه‌بعدی NeRF', 'حرکت دوربین روان'] },
      { name: 'Hailuo AI (Minimax)', desc: 'مدل ویدیویی فوق‌العاده با جزئیات چهره و حرکت دینامیک', icon: '🎥', pricing: 'freemium', level: 'pro', url: 'https://hailuoai.video', features: ['کیفیت سینمایی شگفت‌انگیز', 'حرکت نرم بدون تاری', 'تولید سریع'] },
      { name: 'Genmo', desc: 'پلتفرم خلاقانه تولید ویدیوی متن به تصویر با مدل Mochi', icon: '✨', pricing: 'freemium', level: 'beginner', url: 'https://genmo.ai', features: ['مدل متن‌باز Mochi', 'حرکات روان', 'رایگان در شروع'] }
    ]
  },
  {
    id: 'audio',
    emoji: '🎵',
    name: 'صدا و موزیک',
    desc: 'تولید موزیک، صداگذاری، و تبدیل متن به گفتار',
    tools: [
      { name: 'ElevenLabs', desc: 'برترین هوش مصنوعی تبدیل متن به گفتار و کلون صدا در دنیا', icon: '🗣️', pricing: 'freemium', level: 'beginner', url: 'https://elevenlabs.io', features: ['احساسات طبیعی در صدا', 'پشتیبانی از زبان فارسی', 'کلون لحظه‌ای صدا'] },
      { name: 'Suno', desc: 'تولید آهنگ کامل با ترانه، خواننده و تنظیم فقط با یک خط پرامپت', icon: '🎶', pricing: 'freemium', level: 'beginner', url: 'https://suno.com', features: ['موزیک کامل تا ۴ دقیقه', 'پشتیبانی عالی از فارسی', 'اعتبار رایگان روزانه'] },
      { name: 'Udio', desc: 'تولید موزیک با کیفیت استودیویی و کنترل دقیق روی ساختار آهنگ', icon: '🎵', pricing: 'freemium', level: 'beginner', url: 'https://udio.com', features: ['کیفیت صدای استودیویی', 'امکان اکستند و ادیت ترک', 'سبک‌های غنی موسیقی'] },
      { name: 'Bark', desc: 'مدل متن‌باز تبدیل متن به صدا با امکان خنده، گریه و مکث', icon: '🐕', pricing: 'free', level: 'pro', url: 'https://github.com/suno-ai/bark', features: ['متن‌باز و رایگان', 'افکت‌های صوتی انسانی', 'اجرا روی سیستم لوکال'] },
      { name: 'AIVA', desc: 'آهنگسازی هوشمند ارکسترال و موسیقی متن پروژه‌ها با فرمت MIDI', icon: '🎼', pricing: 'freemium', level: 'pro', url: 'https://aiva.ai', features: ['خروجی MIDI قابل ادیت', 'موسیقی متن سینمایی و گیم', 'حقوق تجاری اثر'] },
      { name: 'Riffusion', desc: 'تولید ریف‌ها و لوپ‌های خلاقانه موسیقی از طریق طیف‌نگار صوتی', icon: '🎸', pricing: 'free', level: 'beginner', url: 'https://riffusion.com', features: ['خلاقانه و نوآورانه', 'تولید فوری لوپ', 'رایگان'] },
      { name: 'Murf AI', desc: 'استودیوی تولید صدای گویندگی و پادکست با تنوع صدای بالا', icon: '🎙️', pricing: 'freemium', level: 'beginner', url: 'https://murf.ai', features: ['صدای گویندگان حرفه‌ای', 'تنظیم تن و زیروبم', 'همگام با ویدیو'] },
      { name: 'WellSaid Labs', desc: 'صداگذاری سازمانی و آموزشگاهی با بالاترین استاندارد شباهت انسانی', icon: '🗣️', pricing: 'paid', level: 'pro', url: 'https://wellsaidlabs.com', features: ['صداهای فوق‌واقعی', 'مناسب نریشن و کتاب صوتی', 'API پایدار'] },
      { name: 'Soundraw', desc: 'تولید موزیک پس‌زمینه بدون حق کپی‌رایت برای تولیدکنندگان محتوا', icon: '🎶', pricing: 'freemium', level: 'beginner', url: 'https://soundraw.io', features: ['شخصی‌سازی طول و تمپو', 'بدون اخطار کپی‌رایت یوتیوب', 'ادیت بخش‌های آهنگ'] }
    ]
  },
  {
    id: 'text',
    emoji: '✍️',
    name: 'نوشتن و متن',
    desc: 'ابزارهای نوشتن مقاله، کپی‌رایتینگ، و پردازش متن',
    tools: [
      { name: 'ChatGPT', desc: 'محبوب‌ترین دستیار هوش مصنوعی دنیا از OpenAI برای تمام امور', icon: '💬', pricing: 'freemium', level: 'beginner', url: 'https://chat.openai.com', features: ['مدل‌های GPT-4o و o1/o3', 'جستجوی زنده در وب', 'حافظه و سفارشی‌سازی'] },
      { name: 'Claude', desc: 'بهترین چت‌بات در نگارش انسانی، کدنویسی تمیز و تحلیل فایل‌های قطور', icon: '🧠', pricing: 'freemium', level: 'beginner', url: 'https://claude.ai', features: ['نثر بسیار روان و ادیبانه', 'پنجره متنی ۲۰۰ هزار توکن', 'Artifacts تعاملی'] },
      { name: 'Gemini', desc: 'دستیار پیشرفته گوگل متصل به یوتیوب، مپ، داکس و موتور جستجو', icon: '💎', pricing: 'freemium', level: 'beginner', url: 'https://gemini.google.com', features: ['اتصال زنده به اکوسیستم گوگل', 'مدل‌های 1.5 و 2.0 Flash', 'رایگان و سریع'] },
      { name: 'Jasper', desc: 'پلتفرم تخصصی تولید محتوای مارکتینگ، تبلیغات و کمپین‌های تیمی', icon: '📝', pricing: 'paid', level: 'pro', url: 'https://jasper.ai', features: ['حفظ لحن برند (Brand Voice)', 'قالب‌های بازاریابی آماده', 'مدیریت کمپین‌های تیمی'] },
      { name: 'Writesonic', desc: 'تولید محتوا و مقالات سئو شده بر اساس ترندهای گوگل', icon: '⚡', pricing: 'freemium', level: 'beginner', url: 'https://writesonic.com', features: ['مقاله‌نویسی طولانی سئو', 'تولید کپشن و تایتل', 'اعتبار رایگان اولیه'] },
      { name: 'Grammarly', desc: 'دستیار نگارش و تصحیح گرامر، بازنویسی لحن و غلط‌گیری انگلیسی', icon: '✅', pricing: 'freemium', level: 'beginner', url: 'https://grammarly.com', features: ['تصحیح لحن و صراحت متن', 'اکستنشن مرورگر و اپ', 'تشخیص سرقت ادبی'] },
      { name: 'Copy.ai', desc: 'اتوماسیون کپی‌رایتینگ و محتوای فروش با ورک‌فلوهای بازاریابی', icon: '📋', pricing: 'freemium', level: 'beginner', url: 'https://copy.ai', features: ['ورک‌فلوهای مارکتینگ', 'قالب‌های بلاگ و ایمیل', 'پلن رایگان ماهانه'] },
      { name: 'Rytr', desc: 'ابزار اقتصادی و ساده برای نوشتن سریع کپشن، ایمیل و بلاگ‌پست', icon: '✍️', pricing: 'freemium', level: 'beginner', url: 'https://rytr.me', features: ['قیمت بسیار مناسب', 'پشتیبانی از ۳۰+ زبان', 'استفاده فوق‌العاده آسان'] }
    ]
  },
  {
    id: 'data',
    emoji: '📊',
    name: 'تحلیل داده و اسناد',
    desc: 'ابزارهای هوشمند پردازش، تحلیل اکسل، و بصری‌سازی داده‌ها',
    tools: [
      { name: 'Julius AI', desc: 'دستیار دانشمند داده — رسم خودکار نمودار و تحلیل با آپلود اکسل و CSV', icon: '🧮', pricing: 'freemium', level: 'beginner', url: 'https://julius.ai', features: ['تحلیل با پرامپت ساده', 'نمودارهای آماری دقیق', 'اجرای کدهای پایتون'] },
      { name: 'NotebookLM', desc: 'دستیار پژوهشی گوگل بر پایه اسناد و کتاب‌های شما با پادکست صوتی', icon: '📓', pricing: 'free', level: 'beginner', url: 'https://notebooklm.google.com', features: ['کاملاً رایگان', 'ارجاع دقیق به صفحات منبع', 'تولید پادکست دو نفره صوتی'] },
      { name: 'Rows.com', desc: 'اسپردشیت هوشمند نسل جدید با تحلیلگر AI و اتصال مستقیم به APIها', icon: '📈', pricing: 'freemium', level: 'beginner', url: 'https://rows.com', features: ['جایگزین مدرن اکسل', 'فرمول‌نویسی خودکار با AI', 'اتصال مستقیم به داده‌های وب'] },
      { name: 'Hex', desc: 'پلتفرم مشارکتی تحلیل داده و نوت‌بوک‌های پایتون و SQL با هوش مصنوعی', icon: '📊', pricing: 'freemium', level: 'pro', url: 'https://hex.tech', features: ['نوشتن کوئری‌های SQL با AI', 'داشبوردهای تعاملی', 'مناسب تحلیلگران حرفه‌ای'] },
      { name: 'PandasAI', desc: 'کتابخانه و ابزار گفتگو به زبان طبیعی با دیتافریم‌های پایتون و داده‌ها', icon: '🐼', pricing: 'free', level: 'pro', url: 'https://pandas-ai.com', features: ['متن‌باز', 'پاسخ به سوالات آماری پیچیده', 'نمودارگیری خودکار'] },
      { name: 'Obviously AI', desc: 'پیش‌بینی و یادگیری ماشین برای کسب‌وکارها بدون نوشتن یک خط کد', icon: '🔮', pricing: 'paid', level: 'beginner', url: 'https://obviously.ai', features: ['بدون نیاز به کدنویسی', 'پیش‌بینی رفتار مشتریان', 'خروجی گزارش سریع'] }
    ]
  },
  {
    id: 'agents',
    emoji: '🤖',
    name: 'اتوماسیون و ایجنت‌ها',
    desc: 'ساخت ربات، ورک‌فلوهای خودکار، و ایجنت‌های تصمیم‌گیرنده',
    tools: [
      { name: 'AutoGPT', desc: 'ایجنت خودمختار معروف برای شکستن اهداف بزرگ به تسک‌های کوچک', icon: '🤖', pricing: 'free', level: 'pro', url: 'https://github.com/Significant-Gravitas/AutoGPT', features: ['کاملاً خودمختار', 'متن‌باز و رایگان', 'جستجو و اجرای فرآیند'] },
      { name: 'CrewAI', desc: 'فریم‌ورک ساخت تیم‌های چند-ایجنت هماهنگ برای شبیه‌سازی سازمان', icon: '👥', pricing: 'free', level: 'pro', url: 'https://crewai.com', features: ['تعریف نقش و تخصص برای هر ایجنت', 'متن‌باز و ماژولار', 'سازگار با انواع مدل‌ها'] },
      { name: 'Botpress', desc: 'پلتفرم بصری ساخت چت‌بات‌های پیشرفته پشتیبانی و فروش', icon: '💬', pricing: 'freemium', level: 'beginner', url: 'https://botpress.com', features: ['طراحی بصری بدون کد', 'اتصال به تلگرام، واتساپ و وب', 'درک هوشمند اسناد دانش'] },
      { name: 'n8n', desc: 'پلتفرم قدرتمند اتوماسیون جریان کار و اتصال هوش مصنوعی به سرویس‌ها', icon: '🔗', pricing: 'freemium', level: 'pro', url: 'https://n8n.io', features: ['امکان سلف‌هاست رایگان', '۴۰۰+ کانکتور آماده', 'پشتیبانی عمیق از نودهای AI'] },
      { name: 'Make (Integromat)', desc: 'محبوب‌ترین ابزار خودکارسازی کارهای روزمره با رابط کاربری جذاب', icon: '⚙️', pricing: 'freemium', level: 'beginner', url: 'https://make.com', features: ['رابط بصری کشیدن و رها کردن', 'هزاران قالب آماده', 'پلن رایگان ماهیانه'] },
      { name: 'Dify', desc: 'پلتفرم جامع متن‌باز توسعه اپ‌های هوش مصنوعی، ایجنت‌ها و RAG', icon: '🏗️', pricing: 'freemium', level: 'pro', url: 'https://dify.ai', features: ['مدیریت دیتابیس‌های دانش', 'تست سریع پرامپت‌ها', 'سلف‌هاست آسان با داکر'] },
      { name: 'LangChain', desc: 'استاندارد صنعت برنامه‌نویسی برای زنجیره‌سازی مدل‌ها و ساخت ایجنت', icon: '🔗', pricing: 'free', level: 'pro', url: 'https://langchain.com', features: ['بزرگترین اکوسیستم توسعه AI', 'متن‌باز در پایتون و JS', 'پشتیبانی از انواع دیتابیس'] },
      { name: 'LlamaIndex', desc: 'فریم‌ورک تخصصی اتصال داده‌های خصوصی و اسناد سازمان به مدل‌ها (RAG)', icon: '📚', pricing: 'free', level: 'pro', url: 'https://llamaindex.ai', features: ['بهترین RAG تخصصی', 'ایندکس‌گذاری دقیق اسناد', 'متن‌باز و منعطف'] },
      { name: 'Flowise', desc: 'محیط گرافیکی ساخت ایجنت‌ها و پایپ‌لاین‌های LangChain بدون کدنویسی', icon: '🔄', pricing: 'free', level: 'beginner', url: 'https://flowiseai.com', features: ['Drag & Drop بصری', 'متن‌باز و رایگان', 'تست سریع در مرورگر'] }
    ]
  },
  {
    id: 'search',
    emoji: '🔍',
    name: 'جستجوی هوشمند',
    desc: 'موتورهای جستجوی نسل جدید مبتنی بر هوش مصنوعی',
    tools: [
      { name: 'Perplexity', desc: 'پیشرفته‌ترین موتور جستجوی هوشمند دنیا با ذکر دقیق منابع و لینک‌ها', icon: '🔮', pricing: 'freemium', level: 'beginner', url: 'https://perplexity.ai', features: ['ذکر منابع معتبر', 'حالت‌های Pro و Research', 'اپلیکیشن موبایل و وب'] },
      { name: 'Phind', desc: 'موتور جستجوی تخصصی برنامه‌نویسان با حل مستقیم مسائل کدنویسی', icon: '💻', pricing: 'freemium', level: 'pro', url: 'https://phind.com', features: ['پاسخ به سوالات فنی و کد', 'ادغام با داکیومنت‌ها', 'سریع و دقیق'] },
      { name: 'Genspark', desc: 'جستجوگر انقلابی که برای هر پرسش یک صفحه هوشمند Sparkpage می‌سازد', icon: '✨', pricing: 'freemium', level: 'beginner', url: 'https://genspark.ai', features: ['صفحات Sparkpage اختصاصی', 'ترکیب چند ایجنت جستجو', 'بدون تبلیغات سنتی'] },
      { name: 'Exa.ai', desc: 'موتور جستجوی معنایی طراحی شده اختصاصی برای هوش مصنوعی و داده‌ها', icon: '🧠', pricing: 'freemium', level: 'pro', url: 'https://exa.ai', features: ['فهم معنایی به جای کلمات کلیدی', 'API پرسرعت برای AI', 'فیلتر نتایج بر اساس کیفیت'] },
      { name: 'You.com', desc: 'موتور جستجوی همه‌کاره با چت‌بات‌های تخصصی و دسترسی به اطلاعات زنده', icon: '🌐', pricing: 'freemium', level: 'beginner', url: 'https://you.com', features: ['مودهای متنوع جستجو', 'ابزارهای جانبی هوش مصنوعی', 'رایگان'] },
      { name: 'Kagi', desc: 'موتور جستجوی پریمیوم فوق‌سریع و کاملاً خصوصی بدون ردگیری و تبلیغ', icon: '🔑', pricing: 'paid', level: 'pro', url: 'https://kagi.com', features: ['۱۰۰٪ بدون تبلیغ و ردیاب', 'خلاصه‌سازی هوشمند صفحات', 'شخصی‌سازی نتایج'] },
      { name: 'Andi Search', desc: 'موتور جستجوی مینیمال و آرام با خلاصه‌های خوانا و بدون هرزنامه', icon: '🤖', pricing: 'free', level: 'beginner', url: 'https://andisearch.com', features: ['کاملاً رایگان', 'پاسخ مستقیم بدون کلافگی', 'رابط کاربری خلوت'] }
    ]
  },
  {
    id: 'platforms',
    emoji: '🏗️',
    name: 'پلتفرم‌های مدل و API',
    desc: 'دسترسی به API، مقایسه مدل‌ها، و تست هوش مصنوعی',
    tools: [
      { name: 'Google AI Studio', desc: 'محیط رایگان توسعه‌دهندگان گوگل برای تست مدل‌های Gemini با ۲ میلیون کانتکست', icon: '⚡', pricing: 'free', level: 'beginner', url: 'https://aistudio.google.com', features: ['کانتکست ۲ میلیون توکن', 'دریافت رایگان API Key', 'مدل‌های Gemini 2.0 Flash'] },
      { name: 'Hugging Face', desc: 'بزرگترین هاب و مخزن مدل‌ها، دیتاست‌ها و برنامه‌های هوش مصنوعی متن‌باز', icon: '🤗', pricing: 'freemium', level: 'pro', url: 'https://huggingface.co', features: ['بیش از ۵۰۰ هزار مدل', 'فضاهای اجرایی Spaces', 'Inference API'] },
      { name: 'LM Arena', desc: 'آرنای سنجش و رتبه‌بندی زنده مدل‌ها بر اساس مبارزه و رای نابینای کاربران', icon: '🏟️', pricing: 'free', level: 'beginner', url: 'https://lmarena.ai', features: ['معتبرترین لیدربورد مدل‌ها', 'تست همزمان دو مدل ناشناس', 'کاملاً رایگان'] },
      { name: 'Ollama', desc: 'ساده‌ترین راهکار برای اجرای لوکال مدل‌های Llama، Mistral و DeepSeek در سیستم', icon: '🦙', pricing: 'free', level: 'pro', url: 'https://ollama.com', features: ['۱۰۰٪ آفلاین و محلی', 'دستورات ساده CLI', 'یکپارچگی با ادیتورها'] },
      { name: 'Groq', desc: 'سریع‌ترین زیرساخت پردازش هوش مصنوعی با تراشه‌های LPU و صدها توکن بر ثانیه', icon: '⚡', pricing: 'freemium', level: 'beginner', url: 'https://groq.com', features: ['سرعت باورنکردنی پاسخ‌دهی', 'پلن رایگان سخاوتمندانه', 'سازگار با فرمت OpenAI API'] },
      { name: 'OpenRouter', desc: 'یک API یکپارچه برای دسترسی به بیش از ۱۰۰ مدل برتر هوش مصنوعی', icon: '🔀', pricing: 'freemium', level: 'pro', url: 'https://openrouter.ai', features: ['تنها با یک شارژ حساب', 'تغییر آنی مدل‌ها', 'مدل‌های رایگان متعدد'] },
      { name: 'Replicate', desc: 'سرویس ابری اجرای آسان انواع مدل‌های متن‌باز با API به ازای هر ثانیه مصرف', icon: '☁️', pricing: 'freemium', level: 'pro', url: 'https://replicate.com', features: ['اجرای مدل‌های تصویر و ویدیو', 'بدون نیاز به سرور شخصی', 'API بسیار تمیز'] },
      { name: 'Together AI', desc: 'کلاود تخصصی اجرای پرسرعت و آموزش مدل‌های زبانی متن‌باز', icon: '🤝', pricing: 'freemium', level: 'pro', url: 'https://together.ai', features: ['قیمت بسیار رقابتی', 'فاین‌تیون آسان مدل‌ها', 'تنوع بالای مدل‌های باز'] },
      { name: 'Anyscale', desc: 'پلتفرم سازمانی مقیاس‌پذیر اجرای مدل‌ها بر بستر فریم‌ورک Ray', icon: '☁️', pricing: 'freemium', level: 'pro', url: 'https://anyscale.com', features: ['مقیاس‌پذیری فوق‌العاده', 'پایداری بالا', 'مناسب پروژه‌های بزرگ'] },
      { name: 'DeepInfra', desc: 'ارزان‌ترین پروایدر اجرای سرورلس مدل‌های محبوب متن‌باز', icon: '⚡', pricing: 'freemium', level: 'beginner', url: 'https://deepinfra.com', features: ['هزینه فوق‌العاده پایین', 'راه‌اندازی فوری', 'پشتیبانی از Whisper و Llama'] },
      { name: 'Fireworks AI', desc: 'موتور استنتاج فوق‌سریع و بهینه‌سازی شده مدل‌های زبانی سازمانی', icon: '🔥', pricing: 'freemium', level: 'pro', url: 'https://fireworks.ai', features: ['تأخیر بسیار ناچیز (Low Latency)', 'پایداری بالا در ترافیک سنگین', 'کیفیت استنتاج بالا'] }
    ]
  },
  {
    id: 'agents-pro',
    emoji: '🛠️',
    name: 'ایجنت‌های حرفه‌ای و CLI',
    desc: 'ایجنت‌های کدنویسی و اتوماسیون با آموزش نصب و دستورات ترمینال',
    tools: [
      { name: 'Hermes Agent', desc: 'ایجنت هوشمند Nous Research — چند پلتفرمه، یادگیرنده با حافظه پایدار', icon: '🪐', pricing: 'freemium', level: 'pro', url: 'https://github.com/NousResearch/hermes-agent', features: ['خود بهبودی و یادگیری', 'پشتیبانی از پروتکل MCP', 'حافظه پایدار در طول زمان', 'اجرا در چند پلتفرم'],
        installGuide: {
          steps: [
            { cmd: 'curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash', desc: 'نصب با اسکریپت خودکار در ترمینال' },
            { cmd: 'hermes model', desc: 'انتخاب مدل و پروایدر مورد نظر' },
            { cmd: 'hermes', desc: 'شروع کار و چت با ایجنت' }
          ],
          tips: ['پروایدرهای قابل انتخاب: OpenRouter, Anthropic, OpenAI, DeepSeek', 'روی انواع سیستم‌عامل‌های Linux، macOS و Windows اجرا می‌شود', 'امکان یکپارچگی با پایگاه‌های داده لوکال'],
          connect: 'از طریق Telegram, Discord, Slack و ترمینال متصل می‌شود'
        }
      },
      { name: '9Router', desc: 'روتر هوشمند AI — اتصال تمام ابزارهای CLI به بیش از ۶۰ پروایدر با صرفه‌جویی توکن', icon: '🔀', pricing: 'free', level: 'pro', url: 'https://9router.com', features: ['پشتیبانی از ۶۰+ پروایدر', 'صرفه‌جویی ۲۰ تا ۶۵ درصد در توکن‌ها', 'سیستم Failover خودکار', 'سازگار با استاندارد OpenAI'],
        installGuide: {
          steps: [
            { cmd: 'npm install -g 9router', desc: 'نصب سراسری با پکیج منیجر npm' },
            { cmd: '9router', desc: 'اجرای سرور لوکال (روی پورت 20128)' },
            { cmd: 'point your tool to http://localhost:20128/v1', desc: 'ست کردن Endpoint ابزارهای شما روی روتر' }
          ],
          tips: ['با ابزارهایی مثل Claude Code, Cursor, Cline, Aider هماهنگ است', 'مدل‌های رایگان متعدد نظیر Qwen و Kiro را پوشش می‌دهد', 'به شدت هزینه‌های مصرف توکن را کاهش می‌دهد'],
          connect: 'هر ابزاری که از OpenAI Base URL پشتیبانی کند متصل می‌شود'
        }
      },
      { name: 'Claude Code', desc: 'ایجنت کدنویسی انقلابی ترمینال‌محور از شرکت Anthropic با درک کل کدبیس', icon: '🧠', pricing: 'paid', level: 'pro', url: 'https://docs.anthropic.com/en/docs/claude-code', features: ['درک عمیق ساختار پروژه', 'اجرای خودکار دستورات Git', 'ویرایش مستقیم چندین فایل', 'پشتیبانی از ابزارهای MCP'],
        installGuide: {
          steps: [
            { cmd: 'npm install -g @anthropic-ai/claude-code', desc: 'نصب رسمی Claude Code در ترمینال' },
            { cmd: 'claude', desc: 'شروع تعامل در پوشه پروژه' },
            { cmd: '/init', desc: 'تحلیل پروژه و ایجاد فایل راهنمای CLAUDE.md' }
          ],
          tips: ['نیاز به کلید API انتروپیک دارد', 'امکان عبور ترافیک از 9Router برای کاهش هزینه وجود دارد', 'کامیت‌های منظم گیت ثبت می‌کند'],
          connect: 'مستقیم در محیط ترمینال خط فرمان اجرا می‌شود'
        }
      },
      { name: 'Cline', desc: 'ایجنت کدنویسی خودمختار در VS Code — اجرای امن در ترمینال و پشتیبانی از MCP', icon: '🤖', pricing: 'free', level: 'pro', url: 'https://github.com/cline/cline', features: ['اجرای تست و دستورات ترمینال', 'ویرایش خودکار و تصحیح ارورها', 'پشتیبانی از MCP Tools', 'متن‌باز و رایگان'],
        installGuide: {
          steps: [
            { cmd: 'code --install-extension saoudrizwan.claude-dev', desc: 'نصب افزونه در VS Code (یا جستجوی Cline در تب Extensions)' },
            { cmd: 'تنظیم API Key (Anthropic, OpenRouter یا Ollama لوکال)', desc: 'انتخاب پروایدر هوش مصنوعی در تنظیمات Cline' },
            { cmd: 'کلیک روی آیکون ربات در سایدبار و شروع تسک', desc: 'نوشتن پرامپت و شروع توسعه پروژه' }
          ],
          tips: ['کاملاً متن‌باز است و فقط هزینه مصرف توکن مدل را می‌دهید', 'قابلیت کار با مدل‌های محلی رایگان از طریق Ollama و LM Studio', 'برای تغییرات فایل‌ها از کاربر تأییدیه می‌گیرد'],
          connect: 'به صورت افزونه رسمی روی VS Code، Cursor و Windsurf اجرا می‌شود'
        }
      },
      { name: 'Aider', desc: 'دستیار کدنویسی ترمینالی محبوب جفت‌برنامه‌نویس (Pair Programmer) با ادغام گیت', icon: '🔧', pricing: 'freemium', level: 'pro', url: 'https://aider.chat', features: ['ویرایش چند فایلی همزمان', 'کامیت‌های تمیز و منظم گیت', 'پشتیبانی از انواع مدل‌ها', 'متن‌باز و منعطف'],
        installGuide: {
          steps: [
            { cmd: 'pip install aider-chat', desc: 'نصب بسته‌ی پایتونی Aider' },
            { cmd: 'aider --model claude-3-5-sonnet', desc: 'اجرا با مدل قدرتمند Claude 3.5 Sonnet' },
            { cmd: 'aider --model deepseek/deepseek-chat', desc: 'یا اجرا با مدل ارزان DeepSeek V3' }
          ],
          tips: ['با تقریباً تمام مدل‌های دنیا از طریق LiteLLM کار می‌کند', 'تاریخچه گیت را تحلیل می‌کند تا بهترین ادیت را پیشنهاد دهد', 'رایگان در صورت استفاده از مدل‌های لوکال یا ارزان'],
          connect: 'مستقیم داخل دایرکتوری پروژه در ترمینال اجرا می‌شود'
        }
      }
    ]
  },
  {
    id: 'hidden-gems',
    emoji: '💎',
    name: 'گنج‌های پنهان (Hidden Gems)',
    desc: 'ابزارهای فوق‌العاده کاربردی که هر متخصصی باید در جعبه‌ابزارش داشته باشد',
    tools: [
      { name: 'v0.dev', desc: 'تولید کامپوننت و رابط‌های کاربری چشم‌نواز React و Tailwind از تیم Vercel', icon: '⚡', pricing: 'freemium', level: 'beginner', url: 'https://v0.dev', features: ['تولید فوری کد React', 'بر پایه shadcn/ui', 'پیش‌نمایش زنده در مرورگر'] },
      { name: 'Bolt.new', desc: 'ساخت و دیپلوی اپلیکیشن‌های کامل فول‌استک در مرورگر بدون نیاز به نصب هیچ پکیجی', icon: '⚡', pricing: 'freemium', level: 'beginner', url: 'https://bolt.new', features: ['محیط کامل فول‌استک در مرورگر', 'نصب خودکار پکیج‌های npm', 'دیپلوی ۱-کلیکه روی Netlify'] },
      { name: 'Pinokio', desc: 'مرورگر انقلابی برای نصب و اجرای ۱-کلیکه تمام هوش مصنوعی‌های لوکال دنیا', icon: '🤖', pricing: 'free', level: 'beginner', url: 'https://pinokio.computer', features: ['نصب اتوماتیک ComfyUI و Whisper', 'بدون سر و کله زدن با پایتون و گیت', 'رایگان و متن‌باز'] },
      { name: 'Upscayl', desc: 'نرم‌افزار رایگان و متن‌باز افزایش رزولوشن و کیفیت عکس با کارت گرافیک لوکال', icon: '🔍', pricing: 'free', level: 'beginner', url: 'https://upscayl.org', features: ['کاملاً رایگان و بدون واترمارک', 'افزایش کیفیت تا ۱۶ برابر', '۱۰۰٪ آفلاین و امن'] },
      { name: 'Krea AI', desc: 'تولید و رندر تصاویر در کسری از ثانیه همزمان با کشیدن قلم روی صفحه (Real-Time)', icon: '🎨', pricing: 'freemium', level: 'beginner', url: 'https://krea.ai', features: ['تولید تصویر همگام با کشیدن', 'ابزار افزایش کیفیت Enhance', 'خلاقیت بی‌پایان'] },
      { name: 'Whisper WebGPU', desc: 'تبدیل صوت و ویس به متن به صورت ۱۰۰٪ رایگان و محلی داخل مرورگر با شتاب‌دهنده گرافیکی', icon: '🎙️', pricing: 'free', level: 'beginner', url: 'https://whisperweb.org', features: ['بدون ارسال صوت به سرور', 'پشتیبانی عالی از زبان فارسی', 'کاملاً رایگان و متن‌باز'] }
    ]
  }
];

// ═══════════════════════════════════════════
//  WIZARD DATA
// ═══════════════════════════════════════════
const wizardData = {
  tasks: [
    { id: 'coding', label: '🖥️ کدنویسی', category: 'coding' },
    { id: 'image', label: '🎨 طراحی عکس', category: 'image' },
    { id: 'video', label: '🎬 ساخت ویدیو', category: 'video' },
    { id: 'audio', label: '🎵 صدا و موزیک', category: 'audio' },
    { id: 'text', label: '✍️ نوشتن', category: 'text' },
    { id: 'data', label: '📊 تحلیل داده', category: 'data' },
    { id: 'agents', label: '🤖 اتوماسیون', category: 'agents' },
    { id: 'search', label: '🔍 جستجو', category: 'search' },
    { id: 'platforms', label: '🏗️ پلتفرم مدل', category: 'platforms' },
    { id: 'agents-pro', label: '🛠️ ایجنت حرفه‌ای', category: 'agents-pro' },
    { id: 'hidden-gems', label: '💎 گنج‌های پنهان', category: 'hidden-gems' }
  ],
  levels: [
    { id: 'beginner', label: 'مبتدی 🌱' },
    { id: 'pro', label: 'حرفه‌ای 🔥' }
  ],
  budgets: [
    { id: 'free', label: 'رایگان 🆓' },
    { id: 'any', label: 'فرقی نمیکنه 💰' }
  ]
};

// ═══════════════════════════════════════════
//  ROADMAP DATA
// ═══════════════════════════════════════════

const roadmapData = {
  coding: {
    beginner: {
      free: [
        { step: 1, title: 'یادگیری مفاهیم با DeepSeek', icon: '🔮', desc: 'مفاهیم برنامه‌نویسی و حل مسئله', tool: 'DeepSeek', url: 'https://chat.deepseek.com', tip: 'ازش بخواه کد رو خط به خط برات توضیح بده' },
        { step: 2, title: 'تکمیل کد با Codeium', icon: '🆓', desc: 'نصب افزونه رایگان در ادیتور', tool: 'Codeium', url: 'https://codeium.com', tip: 'تکمیل خودکار کد حین تایپ' },
        { step: 3, title: 'ساخت سریع پروژه با Replit', icon: '🔄', desc: 'ساخت اپ بدون نیاز به ستاپ محیط', tool: 'Replit Agent', url: 'https://replit.com', tip: 'ایده‌ات رو بگو تا پروژه رو آماده کنه' },
        { step: 4, title: 'ادغام مدل محلی با Continue', icon: '🔄', desc: 'ایجنت کدنویسی در VS Code', tool: 'Continue.dev', url: 'https://continue.dev', tip: 'اتصال به مدل‌های رایگان Ollama' }
      ],
      any: [
        { step: 1, title: 'شروع با ChatGPT', icon: '💬', desc: 'یادگیری منطق برنامه‌نویسی', tool: 'ChatGPT', url: 'https://chat.openai.com', tip: 'سوالات و خطاها رو باهاش حل کن' },
        { step: 2, title: 'کدنویسی با GitHub Copilot', icon: '🐙', desc: 'پیشنهاد هوشمند کد حین کار', tool: 'GitHub Copilot', url: 'https://github.com/features/copilot', tip: 'بهترین سازگاری با محیط توسعه' },
        { step: 3, title: 'توسعه با ادیتور هوشمند Cursor', icon: '⚡', desc: 'ادیتور تخصصی مجهز به AI', tool: 'Cursor', url: 'https://cursor.sh', tip: 'با شورتکات Cmd+K کدهات رو بازنویسی کن' }
      ]
    },
    pro: {
      free: [
        { step: 1, title: 'مدل DeepSeek Coder', icon: '🐉', desc: 'بهترین مدل متن‌باز کدنویسی', tool: 'DeepSeek Coder', url: 'https://deepseek.com', tip: 'پشتیبانی از ۳۳۸ زبان برنامه‌نویسی' },
        { step: 2, title: 'ایجنت خودمختار Cline', icon: '🤖', desc: 'ایجنت توسعه‌دهنده در VS Code', tool: 'Cline', url: 'https://github.com/cline/cline', tip: 'اجرای تست‌ها و دیباگ خودکار در ترمینال' },
        { step: 3, title: 'مدل Qwen Coder', icon: '🦙', desc: 'مدل متن‌باز علی‌بابا برای کدنویسی', tool: 'Qwen Coder', url: 'https://qwenlm.github.io', tip: 'دقت بالا در بنچمارک‌های مهندسی' }
      ],
      any: [
        { step: 1, title: 'توسعه حرفه‌ای در Cursor', icon: '⚡', desc: 'ادیتور برتر برنامه‌نویسان دنیا', tool: 'Cursor', url: 'https://cursor.sh', tip: 'قابلیت Composer برای ویرایش چندفایلی' },
        { step: 2, title: 'جریان کاری هوشمند با Windsurf', icon: '🏄', desc: 'ادیتور AI-Native مجهز به Cascade', tool: 'Windsurf', url: 'https://codeium.com/windsurf', tip: 'شناخت دقیق کل معماری نرم‌افزار' },
        { step: 3, title: 'توسعه پیشرفته ترمینال با Claude Code', icon: '🧠', desc: 'ایجنت خط فرمان Anthropic', tool: 'Claude Code', url: 'https://docs.anthropic.com/en/docs/claude-code', tip: 'مدیریت خودکار پروژه و گیت' }
      ]
    }
  },
  image: {
    beginner: {
      free: [
        { step: 1, title: 'طراحی با Canva AI', icon: '🖼️', desc: 'طراحی ساده گرافیکی با قالب‌های آماده', tool: 'Canva AI', url: 'https://canva.com', tip: 'قالب‌های شبکه‌های اجتماعی' },
        { step: 2, title: 'خلق تصویر با DALL-E 3', icon: '🎯', desc: 'فهم دقیق پرامپت‌ها در چت‌بات', tool: 'DALL-E 3', url: 'https://openai.com/dall-e-3', tip: 'ایده‌های خلاقانه‌ات رو با متن دقیق بنویس' },
        { step: 3, title: 'خلق متون در تصویر با Ideogram', icon: '📝', desc: 'تولید متن‌های تمیز در عکس', tool: 'Ideogram', url: 'https://ideogram.ai', tip: 'مناسب تایپوگرافی، لوگو و پوستر' }
      ],
      any: [
        { step: 1, title: 'ایده‌پردازی در Leonardo AI', icon: '🎭', desc: 'تست سبک‌های متنوع تصویری', tool: 'Leonardo AI', url: 'https://leonardo.ai', tip: 'استفاده از مدل‌های بهینه‌شده' },
        { step: 2, title: 'کیفیت برتر با Midjourney', icon: '🖌️', desc: 'بالاترین کیفیت هنری و فوتورئالیسم', tool: 'Midjourney', url: 'https://midjourney.com', tip: 'بهترین ابزار برای خروجی‌های حرفه‌ای' },
        { step: 3, title: 'گرافیک وکتور با Recraft', icon: '✏️', desc: 'طراحی برداری و آیکون با فرمت SVG', tool: 'Recraft', url: 'https://www.recraft.ai', tip: 'برای طراحی وبسایت و برندینگ' }
      ]
    },
    pro: {
      free: [
        { step: 1, title: 'مدل متن‌باز Flux', icon: '⚡', desc: 'کیفیت فوتورئال با آناتومی بی‌نقص', tool: 'Flux', url: 'https://blackforestlabs.ai', tip: 'اجرا از طریق پلتفرم‌های ابری یا لوکال' },
        { step: 2, title: 'شخصی‌سازی با Stable Diffusion', icon: '🌀', desc: 'کنترل کامل با ControlNet و LoRA', tool: 'Stable Diffusion', url: 'https://stability.ai', tip: 'امکان آموزش مدل با چهره و استایل اختصاصی' },
        { step: 3, title: 'افزایش کیفیت با Upscayl', icon: '🔍', desc: 'سوپر رزولوشن آفلاین بدون افت کیفیت', tool: 'Upscayl', url: 'https://upscayl.org', tip: 'رزولوشن تصاویر را تا ۱۶ برابر افزایش دهید' }
      ],
      any: [
        { step: 1, title: 'خلق تصویر حرفه‌ای در Midjourney', icon: '🖌️', desc: 'استاندارد صنعت عکاسی و تصویرسازی', tool: 'Midjourney', url: 'https://midjourney.com', tip: 'استفاده از پارامترهای v 6.1 و stylize' },
        { step: 2, title: 'ادغام حرفه‌ای با Adobe Firefly', icon: '🔥', desc: 'استفاده مستقیم داخل فوتوشاپ', tool: 'Adobe Firefly', url: 'https://firefly.adobe.com', tip: 'امنیت کپی‌رایت برای کارهای تجاری' },
        { step: 3, title: 'طراحی سریع رابط کاربری با v0', icon: '⚡', desc: 'تبدیل پرامپت به کد تمیز React', tool: 'v0.dev', url: 'https://v0.dev', tip: 'خروجی آماده برای توسعه‌دهندگان' }
      ]
    }
  },
  video: {
    beginner: {
      free: [
        { step: 1, title: 'ادیت سریع با CapCut AI', icon: '✂️', desc: 'زیرنویس خودکار و تمپلیت‌های ترند', tool: 'CapCut AI', url: 'https://capcut.com', tip: 'تولید سریع محتوا برای ریلز و تیک‌تاک' },
        { step: 2, title: 'تولید ویدیوی فانتزی با Pika', icon: '⚡', desc: 'تبدیل متن به ویدیوی متحرک', tool: 'Pika', url: 'https://pika.art', tip: 'استفاده از افکت‌های تعاملی پیکا' },
        { step: 3, title: 'ویدیوی واقع‌گرایانه با Kling', icon: '🐉', desc: 'حرکات طبیعی بدن و محیط', tool: 'Kling', url: 'https://klingai.com', tip: 'استفاده از پرامپت‌های توصیفی دقیق' }
      ],
      any: [
        { step: 1, title: 'تولید پیشرفته با Kling AI', icon: '🐉', desc: 'کیفیت بالا و زمان ۱۰ ثانیه‌ای', tool: 'Kling', url: 'https://klingai.com', tip: 'خلق تیزرهای تبلیغاتی کوتاه' },
        { step: 2, title: 'جلوه‌های ویژه با Higgsfield', icon: '🎬', desc: 'کنترل حرکات دوربین و کاراکتر', tool: 'Higgsfield', url: 'https://higgsfield.ai', tip: 'مناسب موزیک ویدیو و سوشال' },
        { step: 3, title: 'کیفیت سینمایی با Hailuo AI', icon: '🎥', desc: 'فوق‌العاده در حرکت نرم دوربین', tool: 'Hailuo AI (Minimax)', url: 'https://hailuoai.video', tip: 'تولید صحنه‌های واقع‌گرایانه سینمایی' }
      ]
    },
    pro: {
      free: [
        { step: 1, title: 'انیمیت هوشمند در Kling', icon: '🐉', desc: 'تبدیل عکس به ویدیو با حفظ سوژه', tool: 'Kling', url: 'https://klingai.com', tip: 'شروع با تصویر ورودی مرجع' },
        { step: 2, title: 'تولید فریم‌های ۳بعدی با Luma AI', icon: '🌐', desc: 'دوربین پویا و جلوه‌های NeRF', tool: 'Luma AI', url: 'https://lumalabs.ai', tip: 'خلق شات‌های چرخشی ۳۶۰ درجه' },
        { step: 3, title: 'رندر مدل‌های سبک در Genmo', icon: '✨', desc: 'استفاده از مدل متن‌باز Mochi', tool: 'Genmo', url: 'https://genmo.ai', tip: 'شبیه‌سازی فیزیک حرکتی' }
      ],
      any: [
        { step: 1, title: 'کنترل حرفه‌ای با Runway ML', icon: '🎥', desc: 'تولید ویدیو با نسل ۳ آلفا', tool: 'Runway ML', url: 'https://runwayml.com', tip: 'استفاده از موشن براش و کنترل دوربین' },
        { step: 2, title: 'کیفیت فوق‌سینمایی با Sora', icon: '🌟', desc: 'مدل ویدیویی بی‌رقیب OpenAI', tool: 'Sora', url: 'https://openai.com/sora', tip: 'درک دقیق فیزیک و پیوستگی صحنه‌ها' },
        { step: 3, title: 'آواتار و دوبله با HeyGen', icon: '👋', desc: 'لیپ‌سینک طبیعی و ترجمه ویدیو', tool: 'HeyGen', url: 'https://heygen.com', tip: 'بین‌المللی کردن محتوا به زبان‌های مختلف' }
      ]
    }
  },
  audio: {
    beginner: {
      free: [
        { step: 1, title: 'تولید آهنگ با Suno', icon: '🎶', desc: 'ساخت آهنگ کامل با کلام با پرامپت متنی', tool: 'Suno', url: 'https://suno.com', tip: 'سبک موزیک و شعر را به فارسی یا انگلیسی بنویسید' },
        { step: 2, title: 'تولید لوپ در Riffusion', icon: '🎸', desc: 'خلق ایده‌های ریتمیک فوری', tool: 'Riffusion', url: 'https://riffusion.com', tip: 'مناسب پس‌زمینه کلیپ‌ها' },
        { step: 3, title: 'پیاده‌سازی صوت با Whisper WebGPU', icon: '🎙️', desc: 'تبدیل ویس به متن رایگان در مرورگر', tool: 'Whisper WebGPU', url: 'https://whisperweb.org', tip: 'بدون نیاز به اینترنت پرسرعت' }
      ],
      any: [
        { step: 1, title: 'آهنگسازی استودیویی با Udio', icon: '🎵', desc: 'کیفیت شفاف صدا و سبک‌های متنوع', tool: 'Udio', url: 'https://udio.com', tip: 'امکان گسترش و تنظیم بخش‌های ترک' },
        { step: 2, title: 'صداگذاری زنده با ElevenLabs', icon: '🗣️', desc: 'طبیعی‌ترین هوش مصنوعی صداگذاری دنیا', tool: 'ElevenLabs', url: 'https://elevenlabs.io', tip: 'پشتیبانی عالی از زبان فارسی با احساسات' },
        { step: 3, title: 'موزیک بدون کپی‌رایت با Soundraw', icon: '🎶', desc: 'تنظیم موسیقی برای ویدیوهای یوتیوب', tool: 'Soundraw', url: 'https://soundraw.io', tip: 'بدون هیچ دغدغه کپی‌رایتی' }
      ]
    },
    pro: {
      free: [
        { step: 1, title: 'مدل متن‌باز Bark', icon: '🐕', desc: 'تولید گفتار انسان با لحن طبیعی', tool: 'Bark', url: 'https://github.com/suno-ai/bark', tip: 'امکان اعمال خنده و مکث در صدا' },
        { step: 2, title: 'ساخت آهنگ با Suno', icon: '🎶', desc: 'تولید ترک‌های متنوع و سمپل‌برداری', tool: 'Suno', url: 'https://suno.com', tip: 'ترکیب با ورک‌استیشن‌های صوتی (DAW)' },
        { step: 3, title: 'آهنگسازی ارکسترال با AIVA', icon: '🎼', desc: 'خروجی قطعات موسیقی با فایل MIDI', tool: 'AIVA', url: 'https://aiva.ai', tip: 'ادیت نت‌ها و سازها داخل نرم‌افزارهای آهنگسازی' }
      ],
      any: [
        { step: 1, title: 'کلون حرفه‌ای صدا در ElevenLabs', icon: '🗣️', desc: 'شبیه‌سازی صدای خودتان یا گوینده با کیفیت بی‌نقص', tool: 'ElevenLabs', url: 'https://elevenlabs.io', tip: 'تولید کتاب صوتی، پادکست و نریشن' },
        { step: 2, title: 'تولید قطعات استودیویی در Udio', icon: '🎵', desc: 'تنظیم جزئیات آکوردها و هم‌خوانی‌ها', tool: 'Udio', url: 'https://udio.com', tip: 'تسلط کامل بر اینترو، ورس و کروس' },
        { step: 3, title: 'صداگذاری برند با WellSaid Labs', icon: '🗣️', desc: 'بالاترین وفاداری صوتی برای استودیوها', tool: 'WellSaid Labs', url: 'https://wellsaidlabs.com', tip: 'مناسب تیزرهای تجاری بزرگ' }
      ]
    }
  },
  text: {
    beginner: {
      free: [
        { step: 1, title: 'ایده‌پردازی با ChatGPT', icon: '💬', desc: 'نوشتن پیش‌نویس اولیه، طوفان فکری و پاسخ به سوالات', tool: 'ChatGPT', url: 'https://chat.openai.com', tip: 'مستقیم و ساده هدف خود را توضیح دهید' },
        { step: 2, title: 'تحلیل دقیق‌تر با Gemini', icon: '💎', desc: 'جستجوی زنده در وب و دسترسی به اطلاعات به‌روز', tool: 'Gemini', url: 'https://gemini.google.com', tip: 'پاسخ‌های چندمنظوره با سرعت عالی' },
        { step: 3, title: 'بهبود نگارش با Grammarly', icon: '✅', desc: 'اصلاح غلط‌های املایی و روان‌سازی جملات', tool: 'Grammarly', url: 'https://grammarly.com', tip: 'نصب افزونه روی مرورگر' }
      ],
      any: [
        { step: 1, title: 'نگارش عمیق و لحن فاخر با Claude', icon: '🧠', desc: 'روان‌ترین قلم هوش مصنوعی برای مقالات و ترجمه', tool: 'Claude', url: 'https://claude.ai', tip: 'بهترین چت‌بات در درک ظرافت‌های زبانی' },
        { step: 2, title: 'محتوای بازاریابی با Writesonic', icon: '⚡', desc: 'تولید سریع متن‌های سئو شده و پست‌های وبلاگ', tool: 'Writesonic', url: 'https://writesonic.com', tip: 'انتخاب کلمات کلیدی مناسب حوزه کاری' },
        { step: 3, title: 'کپی‌رایتینگ با Copy.ai', icon: '📋', desc: 'ساخت کپشن‌ها و ایمیل‌های ترغیب‌کننده فروش', tool: 'Copy.ai', url: 'https://copy.ai', tip: 'بهره‌گیری از قالب‌های اختصاصی بازاریابی' }
      ]
    },
    pro: {
      free: [
        { step: 1, title: 'تحلیل اسناد در NotebookLM', icon: '📓', desc: 'پردازش کتاب‌ها و مقالات پژوهشی با استناد موثق', tool: 'NotebookLM', url: 'https://notebooklm.google.com', tip: 'بدون توهم زدن، دقیقاً بر مبنای جزوات شما پاسخ می‌دهد' },
        { step: 2, title: 'خلق متن طولانی با Claude', icon: '🧠', desc: 'پنجره متنی عظیم برای تحلیل کتب کامل', tool: 'Claude', url: 'https://claude.ai', tip: 'آپلود فایل‌های چندین مگابایتی برای ویراستاری' },
        { step: 3, title: 'جستجوی مستند در Perplexity', icon: '🔮', desc: 'استخراج فکت‌ها و مقالات آکادمیک با منبع', tool: 'Perplexity', url: 'https://perplexity.ai', tip: 'بررسی منابع پیوست شده در انتهای هر بند' }
      ],
      any: [
        { step: 1, title: 'نویسندگی تیمی با Jasper', icon: '📝', desc: 'طراحی کمپین‌های ۳۶۰ درجه بازاریابی با لحن برند', tool: 'Jasper', url: 'https://jasper.ai', tip: 'آموزش پرسونای مشتریان به سیستم' },
        { step: 2, title: 'نگارش پیشرفته در Claude Pro', icon: '🧠', desc: 'استدلال فوق‌العاده قوی و بدون افت کیفیت', tool: 'Claude', url: 'https://claude.ai', tip: 'استفاده از قابلیت Projects برای سازماندهی دانش' },
        { step: 3, title: 'مدل‌های قدرتمند در Google AI Studio', icon: '⚡', desc: 'کار مستقیم با مدل‌های پرچمدار با ۲ میلیون کانتکست', tool: 'Google AI Studio', url: 'https://aistudio.google.com', tip: 'تست پرامپت‌های بسیار طولانی بدون هزینه' }
      ]
    }
  },
  data: {
    beginner: {
      free: [
        { step: 1, title: 'پژوهش روی اسناد با NotebookLM', icon: '📓', desc: 'تحلیل مقالات علمی، اسناد PDF و ساخت پادکست صوتی', tool: 'NotebookLM', url: 'https://notebooklm.google.com', tip: 'آپلود یادداشت‌ها و کتاب‌های دانشگاهی' },
        { step: 2, title: 'اسپردشیت هوشمند در Rows', icon: '📈', desc: 'تحلیل جداول داده و فرمول‌نویسی خودکار با هوش مصنوعی', tool: 'Rows.com', url: 'https://rows.com', tip: 'خلاصه‌سازی فوری فایل‌های اکسل' }
      ],
      any: [
        { step: 1, title: 'تحلیل خودکار با Julius AI', icon: '🧮', desc: 'آپلود فایل اکسل یا CSV و دریافت نمودار و تحلیل آماری', tool: 'Julius AI', url: 'https://julius.ai', tip: 'ازش بخواهید همبستگی داده‌ها را رسم کند' },
        { step: 2, title: 'پیش‌بینی هوشمند در Obviously AI', icon: '🔮', desc: 'پیش‌بینی بدون نیاز به نوشتن یک خط کد', tool: 'Obviously AI', url: 'https://obviously.ai', tip: 'تحلیل رفتار مشتریان و تخمین فروش' }
      ]
    },
    pro: {
      free: [
        { step: 1, title: 'نوت‌بوک تحلیلی با Hex', icon: '📊', desc: 'محیط اشتراکی تحلیلگری داده با ترکیب SQL و Python', tool: 'Hex', url: 'https://hex.tech', tip: 'نوشتن کوئری‌های پیچیده با پرامپت ساده' },
        { step: 2, title: 'مکالمه با دیتافریم در PandasAI', icon: '🐼', desc: 'تحلیل عمیق دیتابیس‌ها و جدول‌ها به زبان پایتون', tool: 'PandasAI', url: 'https://pandas-ai.com', tip: 'یکپارچه‌سازی در اسکریپت‌های پایتونی' }
      ],
      any: [
        { step: 1, title: 'تحلیل داده‌های کلان با Julius AI', icon: '🧮', desc: 'پاکسازی خودکار داده‌ها و مدل‌سازی آماری پیشرفته', tool: 'Julius AI', url: 'https://julius.ai', tip: 'تولید گزارش‌های حرفه‌ای در فرمت PDF و اسلاید' },
        { step: 2, title: 'داشبوردهای تعاملی سازمانی با Hex', icon: '📊', desc: 'ساخت برنامه‌های تحلیلی قابل اشتراک با مدیران', tool: 'Hex', url: 'https://hex.tech', tip: 'اتصال مستقیم به Snowflake و BigQuery' }
      ]
    }
  },
  agents: {
    beginner: {
      free: [
        { step: 1, title: 'اتوماسیون بصری با Flowise', icon: '🔄', desc: 'طراحی خطوط فرآیند AI با کشیدن و رها کردن نودها', tool: 'Flowise', url: 'https://flowiseai.com', tip: 'آشنایی بدون کد با منطق ایجنت‌ها' },
        { step: 2, title: 'چت‌بات هوشمند با Botpress', icon: '💬', desc: 'ساخت ربات پاسخگوی مشتریان بر پایه اسناد دانشی', tool: 'Botpress', url: 'https://botpress.com', tip: 'اتصال به وبسایت شخصی یا پشتیبانی' }
      ],
      any: [
        { step: 1, title: 'اتوماسیون کارهای روزمره با Make', icon: '⚙️', desc: 'اتصال برنامه‌ها مثل جیمیل، تلگرام و شبکه‌های اجتماعی', tool: 'Make (Integromat)', url: 'https://make.com', tip: 'استفاده از ماژول‌های OpenAI داخل ورک‌فلو' },
        { step: 2, title: 'پلتفرم جامع ایجنت با Dify', icon: '🏗️', desc: 'ساخت دستیارهای RAG و پایپ‌لاین‌های سازمانی', tool: 'Dify', url: 'https://dify.ai', tip: 'مدیریت و پایش تست‌های چندگانه' }
      ]
    },
    pro: {
      free: [
        { step: 1, title: 'توسعه تیمی ایجنت‌ها با CrewAI', icon: '👥', desc: 'تعریف نقش‌ها و وظایف برای همکاری چندین ایجنت', tool: 'CrewAI', url: 'https://crewai.com', tip: 'شبیه‌سازی کامل یک تیم تحقیقاتی یا کدنویسی' },
        { step: 2, title: 'سیستم اتوماسیون سلف‌هاست n8n', icon: '🔗', desc: 'کنترل ۱۰۰٪ داده‌ها با اتوماسیون سازگار با مدل‌های محلی', tool: 'n8n', url: 'https://n8n.io', tip: 'اجرای رایگان روی سرور اختصاصی یا داکر' },
        { step: 3, title: 'توسعه زیرساختی با LangChain', icon: '🔗', desc: 'ساخت پایپ‌لاین‌های پیشرفته با کدهای پایتون', tool: 'LangChain', url: 'https://langchain.com', tip: 'استاندارد روز مهندسی هوش مصنوعی' }
      ],
      any: [
        { step: 1, title: 'ایجنت خودمختار AutoGPT', icon: '🤖', desc: 'انجام چندمرحله‌ای وظایف پیچیده در اینترنت', tool: 'AutoGPT', url: 'https://github.com/Significant-Gravitas/AutoGPT', tip: 'نظارت بر فرآیندها با API پایدار' },
        { step: 2, title: 'سامانه‌های حرفه‌ای RAG با LlamaIndex', icon: '📚', desc: 'جستجو و ایندکس‌گذاری میلیون‌ها سند سازمانی', tool: 'LlamaIndex', url: 'https://llamaindex.ai', tip: 'کاهش خطای مدل‌ها به نزدیک صفر' }
      ]
    }
  },
  search: {
    beginner: {
      free: [
        { step: 1, title: 'پاسخ مستقیم با Andi Search', icon: '🤖', desc: 'جستجوی خلوت و خلاصه‌سازی سریع وب', tool: 'Andi Search', url: 'https://andisearch.com', tip: 'مناسب سوالات ساده و کاربردی' },
        { step: 2, title: 'پژوهش با Perplexity', icon: '🔮', desc: 'جستجوی پیشرفته با ارائه لینک و رفرنس مستقیم', tool: 'Perplexity', url: 'https://perplexity.ai', tip: 'جایگزین روزمره گوگل با پاسخ‌های سرراست' }
      ],
      any: [
        { step: 1, title: 'صفحات هوشمند Genspark', icon: '✨', desc: 'ساخت فوری یک Sparkpage چندرسانه‌ای برای هر موضوع', tool: 'Genspark', url: 'https://genspark.ai', tip: 'ترکیب نتایج متن، ویدیو و نکات کلیدی' },
        { step: 2, title: 'جستجوی بدون تبلیغ Kagi', icon: '🔑', desc: 'تمیزترین نتایج وب با بالاترین حریم خصوصی', tool: 'Kagi', url: 'https://kagi.com', tip: 'شخصی‌سازی دامنه‌های مورد اعتماد' }
      ]
    },
    pro: {
      free: [
        { step: 1, title: 'جستجوی فنی با Phind', icon: '💻', desc: 'موتور جستجوی مهندسین برای عیب‌یابی ارورها و لایبرری‌ها', tool: 'Phind', url: 'https://phind.com', tip: 'اتصال به اسناد رسمی زبان‌های برنامه‌نویسی' },
        { step: 2, title: 'سرچ معنایی با Exa.ai', icon: '🧠', desc: 'جستجوی مبتنی بر مفهوم برای تزریق به داده‌ها و ایجنت‌ها', tool: 'Exa.ai', url: 'https://exa.ai', tip: 'استفاده در پایپ‌لاین‌های پژوهشی' }
      ],
      any: [
        { step: 1, title: 'پژوهش عمیق در Perplexity Pro', icon: '🔮', desc: 'استفاده از مدل‌های Claude 3.5 و GPT-4o برای سنتز اسناد', tool: 'Perplexity', url: 'https://perplexity.ai', tip: 'آپلود فایل و تحلیل همزمان با جستجوی وب' },
        { step: 2, title: 'پایپ‌لاین‌های اتومات با Exa API', icon: '🧠', desc: 'تغذیه ایجنت‌های هوشمند با به‌روزترین داده‌های جهان', tool: 'Exa.ai', url: 'https://exa.ai', tip: 'جستجوی تمیز بدون صفحات سئو فیک' }
      ]
    }
  },
  platforms: {
    beginner: {
      free: [
        { step: 1, title: 'محیط آزمایشی Google AI Studio', icon: '⚡', desc: 'تست مستقیم مدل‌های فوق‌العاده Gemini با کانتکست عظیم', tool: 'Google AI Studio', url: 'https://aistudio.google.com', tip: 'دریافت رایگان کلید API' },
        { step: 2, title: 'مقایسه در LM Arena', icon: '🏟️', desc: 'مشاهده لیدربورد واقعی و عملکرد مدل‌های مختلف', tool: 'LM Arena', url: 'https://lmarena.ai', tip: 'تست نابینای سوالات برای انتخاب مدل بهتر' },
        { step: 3, title: 'سرعت خارق‌العاده Groq', icon: '⚡', desc: 'تجربه پاسخ‌دهی بلادرنگ مدل‌های LLaMA با چیپ‌های LPU', tool: 'Groq', url: 'https://groq.com', tip: 'رایگان در کنسول کلود گرواک' }
      ],
      any: [
        { step: 1, title: 'دسترسی جامع با OpenRouter', icon: '🔀', desc: 'اتصال با یک API Key به تمام مدل‌های مطرح دنیا', tool: 'OpenRouter', url: 'https://openrouter.ai', tip: 'کنترل دقیق هزینه‌ها و انتخاب مدل بهینه' },
        { step: 2, title: 'اجرای ابری با Replicate', icon: '☁️', desc: 'رندر مدل‌های تصویر و ویدیو در مقیاس ابری', tool: 'Replicate', url: 'https://replicate.com', tip: 'پرداخت صرفاً بر اساس ثانیه‌های مصرف' }
      ]
    },
    pro: {
      free: [
        { step: 1, title: 'اجرای محلی با Ollama', icon: '🦙', desc: 'اجرای مدل‌های سبک Llama و DeepSeek روی رم سیستم', tool: 'Ollama', url: 'https://ollama.com', tip: 'امنیت ۱۰۰٪ و بدون نیاز به اینترنت' },
        { step: 2, title: 'اکتشاف در Hugging Face', icon: '🤗', desc: 'دانلود وزن‌ها، دیتاست‌ها و مقالات هوش مصنوعی', tool: 'Hugging Face', url: 'https://huggingface.co', tip: 'استفاده از Spaces برای تست دموی پروژه‌ها' },
        { step: 3, title: 'سرویس‌دهی ارزان با DeepInfra', icon: '⚡', desc: 'سرورلس و بسیار کم‌هزینه برای پروداکشن', tool: 'DeepInfra', url: 'https://deepinfra.com', tip: 'بهترین قیمت برای استنتاج انبوه' }
      ],
      any: [
        { step: 1, title: 'زیرساخت با مقیاس Together AI', icon: '🤝', desc: 'هاست و فاین‌تیون مدل‌های سفارشی', tool: 'Together AI', url: 'https://together.ai', tip: 'پشتیبانی از کلاسترهای قدرتمند پردازشی' },
        { step: 2, title: 'استنتاج فوق سریع در Fireworks AI', icon: '🔥', desc: 'بالاترین Throughput برای محصولات پرترافیک', tool: 'Fireworks AI', url: 'https://fireworks.ai', tip: 'بهینه‌سازی شده برای زمان پاسخ لحظه‌ای' }
      ]
    }
  },
  'agents-pro': {
    beginner: {
      free: [
        { step: 1, title: 'راه‌اندازی روتر 9Router', icon: '🔀', desc: 'اتصال آسان ترمینال به مدل‌های رایگان با صرفه‌جویی توکن', tool: '9Router', url: 'https://9router.com', tip: 'کاهش شدید هزینه‌های تست ابزارها' },
        { step: 2, title: 'کدنویسی با ایجنت Cline', icon: '🤖', desc: 'شروع کار با ایجنت در محیط ویژوال استودیو کد', tool: 'Cline', url: 'https://github.com/cline/cline', tip: 'اتصال به API رایگان یا مدل‌های محلی' }
      ],
      any: [
        { step: 1, title: 'توسعه با ایجنت Cline', icon: '🤖', desc: 'استفاده با مدل‌های قوی‌تر مثل Claude 3.5 Sonnet', tool: 'Cline', url: 'https://github.com/cline/cline', tip: 'بررسی مرحله‌به‌مرحله تغییرات کد' },
        { step: 2, title: 'ایجنت همکار Aider', icon: '🔧', desc: 'حل اشکالات و تکمیل فیچرها در ترمینال', tool: 'Aider', url: 'https://aider.chat', tip: 'اتصال به گیت برای بازگشت تغییرات در صورت نیاز' }
      ]
    },
    pro: {
      free: [
        { step: 1, title: 'ایجنت خودمختار Hermes', icon: '🪐', desc: 'دستیار چندپلتفرمه با حافظه بلندمدت', tool: 'Hermes Agent', url: 'https://github.com/NousResearch/hermes-agent', tip: 'استفاده در پلتفرم‌های تیمی و اتوماسیون' },
        { step: 2, title: 'ترمینال فوق‌حرفه‌ای با Aider', icon: '🔧', desc: 'ادغام با مدل‌های متن‌باز DeepSeek و Qwen', tool: 'Aider', url: 'https://aider.chat', tip: 'ویرایش همزمان چند ریپازیتوری' }
      ],
      any: [
        { step: 1, title: 'ایجنت خط فرمان Claude Code', icon: '🧠', desc: 'قدرتمندترین ایجنت مهندسی نرم‌افزار انتروپیک', tool: 'Claude Code', url: 'https://docs.anthropic.com/en/docs/claude-code', tip: 'اجرای تست‌های خودکار و ریفکتورینگ در مقیاس پروژه' },
        { step: 2, title: 'کاهش هزینه‌ها با 9Router', icon: '🔀', desc: 'مدیریت ترافیک دستورات CLI به پروایدرهای اقتصادی', tool: '9Router', url: 'https://9router.com', tip: 'سیستم لایه‌بندی Failover برای جلوگیری از داون‌تایم' }
      ]
    }
  },
  'hidden-gems': {
    beginner: {
      free: [
        { step: 1, title: 'تولید UI با v0', icon: '⚡', desc: 'ساخت فوری کامپوننت‌های فرانت‌اند با پرامپت ساده', tool: 'v0.dev', url: 'https://v0.dev', tip: 'کپی مستقیم کدهای React و Tailwind' },
        { step: 2, title: 'نصب محلی آسان با Pinokio', icon: '🤖', desc: 'دانلود و اجرای هوش مصنوعی‌ها بدون کدنویسی در سیستم', tool: 'Pinokio', url: 'https://pinokio.computer', tip: 'نصب خودکار تمام پیش‌نیازها با یک کلیک' },
        { step: 3, title: 'پیاده‌سازی ویس با Whisper WebGPU', icon: '🎙️', desc: 'تبدیل صدا به متن کاملاً آفلاین در مرورگر', tool: 'Whisper WebGPU', url: 'https://whisperweb.org', tip: 'بدون نیاز به سرور و پرداخت هزینه' }
      ],
      any: [
        { step: 1, title: 'توسعه فول‌استک با Bolt.new', icon: '⚡', desc: 'ساخت کامل وب‌اپلیکیشن در مرورگر و اجرای لحظه‌ای', tool: 'Bolt.new', url: 'https://bolt.new', tip: 'دیپلوی و تست فوری پروژه بدون ستاپ لوکال' },
        { step: 2, title: 'خلاقیت بصری با Krea AI', icon: '🎨', desc: 'رندر بلادرنگ نقاشی‌ها به تصاویر واقع‌گرایانه', tool: 'Krea AI', url: 'https://krea.ai', tip: 'امکان ارتقای کیفیت و تصحیح هوشمند' }
      ]
    },
    pro: {
      free: [
        { step: 1, title: 'ارتقای کیفیت عکس با Upscayl', icon: '🔍', desc: 'افزایش سایز و شارپنس تصاویر تا ۱۶ برابر با GPU', tool: 'Upscayl', url: 'https://upscayl.org', tip: 'برنامه رایگان دسکتاپ بر پایه هوش مصنوعی' },
        { step: 2, title: 'تولید سریع رابط کاربری با v0', icon: '⚡', desc: 'معماری مدرن فرانت‌اند با استاندارد Next.js', tool: 'v0.dev', url: 'https://v0.dev', tip: 'تولید فرم‌ها و داشبوردهای تمیز' }
      ],
      any: [
        { step: 1, title: 'نمونه‌سازی سریع در Bolt.new', icon: '⚡', desc: 'توسعه سریع MVP و نمونه‌های اولیه استارتاپی', tool: 'Bolt.new', url: 'https://bolt.new', tip: 'رفع باگ‌ها با هوش مصنوعی توکار' },
        { step: 2, title: 'استودیو طراحی زنده با Krea AI', icon: '🎨', desc: 'آموزش و بهینه‌سازی استایل‌های گرافیکی منحصربه‌فرد', tool: 'Krea AI', url: 'https://krea.ai', tip: 'تولید کانسپت‌آرت‌های پرسرعت' }
      ]
    }
  }
};
