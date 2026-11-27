<div dir="rtl">

# نسخه‌ی ۵: چک کردن ارزون شد، ضمانت کردن نه

منبع‌هایی برای این ادعا که AI «چک کردنِ» کد رو ارزون کرده ولی «ضمانت کردن» (کسی که پای عواقب می‌ایسته) هنوز آدمه: متن قانون، قاعده‌ی امضا، شرایط استفاده‌ی فروشنده‌های مدل، بیمه، و سیگنال‌هایی که نشون می‌دن این مرز کجا داره تکون می‌خوره. عددهای Benchmark و مطالعه‌ها رو دوباره نیاوردیم؛ برای اون‌ها `crbug`، `coderabbit-wild`، `amex-cobol`، `correlated-errors`، `approve-screen`، `ncsc-injection`، `veracode-2026`، `frontiercode`، `chen-stratton`، `metr-update`، `shopify-intern`، `nadella-bg2` و `genui` در فایل‌های قبلی هستن.

### [eu-pld-text] قانون اروپا، ماده به ماده: سازنده مسئوله، نرم‌افزار محصوله
- **کی:** اتحادیه‌ی اروپا، Directive (EU) 2024/2853 (قانون مسئولیت محصول معیوب)، متن رسمی در EUR-Lex
- **تاریخ:** تصویب ۲۳ اکتبر ۲۰۲۴؛ اجرا برای محصول‌هایی که بعد از ۹ دسامبر ۲۰۲۶ عرضه می‌شن
- **چی می‌گه:** ماده‌ی ۴(۱): «product» شامل نرم‌افزار هم هست ("raw materials and software"). ماده‌ی ۲(۱): فقط برای محصول‌هایی که بعد از ۹ دسامبر ۲۰۲۶ به بازار می‌آن؛ ماده‌ی ۲۲(۱): دولت‌ها تا همون روز باید قانون داخلی‌شون رو تطبیق بدن. ماده‌ی ۸(۱): مسئول، manufacturer‌ـه، یعنی هر شخص حقیقی یا حقوقی که محصول رو "develops, manufactures or produces"؛ بعدش سازنده‌ی component معیوب، و برای سازنده‌ی خارج از اتحادیه importer یا نماینده‌ش. ماده‌ی ۸(۲): هر کس محصول رو بیرون از کنترل سازنده substantially modify کنه، خودش manufacturer حساب می‌شه؛ مقدمه‌ی ۴۰ می‌گه این شامل تغییر با software update و "continuous learning of an AI system" هم هست.
- **حواست باشه:** مسئولیت با شرکت یا شخصِ سازنده‌ست، نه با برنامه‌نویس حقوق‌بگیرِ اون شرکت؛ و فقط برای خسارت به آدم‌های حقیقی: مرگ، جراحت، اموال شخصی، و از بین رفتن داده‌ای که کاری نیست. ضرر مالی خالص (مقدمه‌ی ۲۴) و خسارت به شرکت‌ها مشمول نیست. ماده‌ی ۲(۲): Open Source که بیرون از فعالیت تجاری ساخته شده مشمول نیست، ولی مقدمه‌ی ۱۵ می‌گه شرکتی که اون Open Source رو توی محصولش می‌ذاره مسئول می‌مونه. قانون مخصوص AI (AI Liability Directive) رو کمیسیون پس گرفت و ۳۱ ژوئیه‌ی ۲۰۲۵ تأیید کرد (Euronews)؛ پس همین قانون محصوله که مونده. ایران رو شامل نمی‌شه. نسخه‌ی کوتاه همین قانون: `eu-pld`.
- **سودش:** قانون‌گذار؛ نفعش حفاظت از مصرف‌کننده و بازار واحده.
- **لینک:** https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng
- **چقدر مطمئنیم:** خودش رو خوندیم

### [kernel-ai-patch] Patch‌ی که گفت AI حق امضا نداره: تاریخ و متن
- **کی:** Sasha Levin، نگه‌دارنده‌ی Linux Kernel؛ Patch در LKML، پذیرفته‌شده توسط Jonathan Corbet (نگه‌دارنده‌ی مستندات)
- **تاریخ:** ۲۳ دسامبر ۲۰۲۵ (نسخه‌ی ۲ در LKML)؛ Commit ‏۶ ژانویه‌ی ۲۰۲۶؛ اولین نسخه‌ی رسمی Kernel که داشتش: Linux 7.0
- **چی می‌گه:** بعد از اجماع Maintainers Summit ‏۲۰۲۵، سند Documentation/process/coding-assistants.rst اضافه شد: "AI agents MUST NOT add Signed-off-by tags." و "Only humans can legally certify the Developer Certificate of Origin (DCO)." آدمی که Patch رو می‌فرسته مسئولِ "Reviewing all AI-generated code" و "Taking full responsibility for the contribution"ـه؛ خود Assistant هم "must never send anything itself". همون موقع یه تگ Assisted-by هم تعریف شد که بگه از چه مدلی کمک گرفته شده.
- **حواست باشه:** قاعده‌ی یک پروژه‌ست، هرچند بزرگ‌ترین پروژه‌ی Open Source دنیا. RFC اولش (ژوئیه‌ی ۲۰۲۵) بحث‌برانگیز بود و شکل نهایی بعد از Summit تصویب شد. تگ Assisted-by بعداً حذف شد (`kernel-assisted-by`)؛ قاعده‌ی امضا نه. سند زنده‌ی فعلی: `linux-sign`.
- **سودش:** پروژه‌ی Open Source؛ نفع تجاری مستقیم نداره.
- **لینک:** https://lore.kernel.org/all/20251223122110.2496946-1-sashal@kernel.org/
- **چقدر مطمئنیم:** خودش رو خوندیم

### [kernel-assisted-by] تگِ «با کمک AI» حذف شد؛ مسئولیت نه
- **کی:** Sasha Levin؛ Commit در درخت Linus Torvalds، با Reviewed-by از Greg Kroah-Hartman و Kees Cook
- **تاریخ:** ۱۴ اکتبر ۲۰۲۶
- **چی می‌گه:** تگ Assisted-by از مستندات و checkpatch حذف شد. دلیل توی پیام Commit: در Linux 7.3 (تا rc7) حدود ۱۰٪ از ۱۸٬۵۳۳ Commit غیرمرج این تگ رو داشتن، درحالی‌که استفاده‌ی واقعی از LLM «خیلی گسترده‌تر» بود؛ بعضی‌ها قاعده رو نمی‌دونستن، بعضی‌ها عمداً نمی‌زدن، و کم نگه‌دارنده‌ای می‌پرسید. پس تگ سیگنالی که برایش نگه داشته شده بود نمی‌داد. ولی قواعد DCO و مسئولیت فرستنده "stay as they are". (قبلش، اوت ۲۰۲۶، Christian Brauner تگ رو به "Assisted-by: LLM" ساده کرده بود، چون اسم بردن از مدل‌ها «تبلیغ مجانی» برای شرکت‌های تجاری بود.)
- **حواست باشه:** این یعنی «اعلام کردن» استفاده از AI قابل اجرا نبود، نه این‌که مسئولیت برداشته شد. اجماع Summit «قوی ولی نه کامل» بود. عدد ۱۰٪ کمینه‌ی استفاده‌ست، نه برآورد واقعی.
- **سودش:** نداره.
- **لینک:** https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=1e035297ffda
- **چقدر مطمئنیم:** خودش رو خوندیم

### [anthropic-tos] Anthropic: مسئولیت ارزیابی Output با مشتریه
- **کی:** Anthropic، Commercial Terms of Service (و Consumer Terms)
- **تاریخ:** نسخه‌ی تجاری مؤثر از ۱۷ ژوئن ۲۰۲۵؛ نسخه‌ی مصرف‌کننده از ۸ اکتبر ۲۰۲۵؛ خونده شد ۲۷ نوامبر ۲۰۲۶
- **چی می‌گه:** بند D.3: "It is Customer's responsibility to evaluate whether Outputs are appropriate"، و این شامل تشخیص جاهاییه که "human review is appropriate". بند L.2: سرویس و Output بدون هیچ ضمانتی ("AS IS") داده می‌شن و Anthropic صریحاً ضمانت نمی‌کنه که Output "ACCURATE, COMPLETE OR ERROR-FREE" باشه. نسخه‌ی مصرف‌کننده هم: "Outputs may not always be accurate" و نباید بدون تأیید مستقل بهشون تکیه کنی.
- **حواست باشه:** همین سند یه استثنا داره: بند K.1، Anthropic در برابر ادعای نقض مالکیت فکری توسط Output از مشتریِ پولی دفاع می‌کنه. یعنی فروشنده مسئولیتِ «کپی‌رایت» رو قبول کرده، مسئولیت «درست بودن» رو نه. شرایط هر چند ماه تغییر می‌کنه؛ تاریخ خوندن مهمه. این پژوهش هم با Claude انجام شده.
- **سودش:** فروشنده‌ی مدل؛ هر چی مسئولیت کمتر، ریسک کمتر.
- **لینک:** https://www.anthropic.com/legal/commercial-terms
- **چقدر مطمئنیم:** خودش رو خوندیم

### [openai-tos] OpenAI: «با Review آدم، قبل از استفاده»
- **کی:** OpenAI، Terms of Use (آمریکا) و Business Terms
- **تاریخ:** مؤثر از ۱ ژانویه‌ی ۲۰۲۶؛ خونده شد ۲۷ نوامبر ۲۰۲۶
- **چی می‌گه:** بخش Accuracy: "Output may not always be accurate." و "You must evaluate Output for accuracy and appropriateness for your use case"، با این ادامه: "including using human review as appropriate". سقف مسئولیت OpenAI: مبلغی که در ۱۲ ماه قبل پرداخت کردی یا ۱۰۰ دلار، هر کدوم بیشتره. Business Terms بند ۴٫۳: "Customer is solely responsible for all use of the Outputs".
- **حواست باشه:** Business Terms بند ۱۳٫۱ هم یه indemnity برای ادعای نقض مالکیت فکری داره (همون Copyright Shield)، باز فقط برای IP. متن نسخه‌ی اروپا و بقیه‌ی دنیا کمی فرق داره.
- **سودش:** فروشنده‌ی مدل.
- **لینک:** https://openai.com/policies/terms-of-use/
- **چقدر مطمئنیم:** خودش رو خوندیم

### [google-genai-terms] Google: «تو مسئول استفاده از محتوای تولیدشده‌ای»
- **کی:** Google، Gemini API Additional Terms of Service (شرایط Developerها)
- **تاریخ:** مؤثر از ۲۳ مارس ۲۰۲۶؛ خونده شد ۲۷ نوامبر ۲۰۲۶
- **چی می‌گه:** "You're responsible for your use of generated content" و برای استفاده‌ی هر کسی که اون محتوا رو بهش می‌دی. بخش Disclaimers: سرویس "may sometimes provide inaccurate or offensive content"؛ و "Don't rely on the Services for medical, mental health, legal, financial" یا دیگر مشاوره‌های حرفه‌ای. و: "Use discretion before relying on, publishing, or otherwise using content".
- **حواست باشه:** این شرایط Developerهاست؛ Google Cloud برای مشتری سازمانی از اکتبر ۲۰۲۳ indemnity برای ادعای IP روی Output می‌ده (`copilot-copyright`). یعنی باز هم: کپی‌رایت بله، درستی نه.
- **سودش:** فروشنده‌ی مدل.
- **لینک:** https://aistudio.google.com/docs/terms
- **چقدر مطمئنیم:** خودش رو خوندیم

### [copilot-copyright] جایی که فروشنده پای Output ایستاد: فقط کپی‌رایت
- **کی:** Microsoft، Brad Smith (رئیس) و Hossein Nowbar (مشاور حقوقی ارشد)، وبلاگ رسمی؛ و Google Cloud یک ماه بعد
- **تاریخ:** ۷ سپتامبر ۲۰۲۳ (تاریخی، هنوز معتبر)؛ گسترش به Azure OpenAI در ۱۵ نوامبر ۲۰۲۳؛ Google در ۱۳ اکتبر ۲۰۲۳
- **چی می‌گه:** Copilot Copyright Commitment: اگه مشتری تجاری به‌خاطر Output ‏Copilot (شامل GitHub Copilot) شکایت کپی‌رایت بخوره، "we will defend the customer and pay the amount of any adverse judgments". شرطش: استفاده از content filterها و "guardrails" داخل محصول، و این‌که عمداً دنبال تولید محتوای ناقض نباشی. Google هم "generated output indemnity" اعلام کرد، به شرط رفتار مسئولانه.
- **حواست باشه:** این دقیقاً سیگنالِ «فروشنده مسئولیت Output رو قبول می‌کنه» هست، ولی فقط برای یک نوع خسارت: نقض مالکیت فکری. برای باگ، خرابی یا ضرر مالی ناشی از کد اشتباه هیچ‌کدوم تعهدی ندادن (`anthropic-tos`، `openai-tos`، `google-genai-terms`). در شرایطی که ما خوندیم (۲۰۲۵ تا ۲۰۲۶) این خط جلوتر نرفته.
- **سودش:** فروشنده‌ی Copilot؛ تعهد برای رفع ترس مشتری سازمانی از خرید بود.
- **لینک:** https://blogs.microsoft.com/on-the-issues/2023/09/07/copilot-copyright-commitment-ai-legal-concerns/
- **چقدر مطمئنیم:** خودش رو خوندیم

### [armilla] اولین بیمه‌ی مستقل مسئولیت AI، پشتوانه‌ی Lloyd's
- **کی:** Armilla AI (تورنتو)، Coverholder در Lloyd's؛ بیمه‌گر: سندیکاهای Lloyd's از جمله Chaucer (بعداً Axis Capital و Convex)
- **تاریخ:** ۳۰ آوریل ۲۰۲۵ (اعلام محصول)؛ ۲۱ ژانویه‌ی ۲۰۲۶ (سقف ۲۵ میلیون دلار)
- **چی می‌گه:** اولین بیمه‌نامه‌ی مستقل و «affirmative» برای مسئولیت AI: اگه سیستم AI اون‌طور که باید کار نکنه، خطای بحرانی یا hallucination تولید کنه و خسارت بزنه، هزینه‌ی حقوقی و مسئولیت رو پوشش می‌ده. از ژانویه‌ی ۲۰۲۶ تا ۲۵ میلیون دلار برای هر سازمان، شامل «AI agent failures» مثل تصمیم غلط یا استفاده‌ی نادرست از ابزار. هر بیمه‌نامه با "independent AI system certification and risk reporting" همراهه.
- **حواست باشه:** هیچ‌جا نمی‌گه «کدِ بدون Review آدم» رو بیمه می‌کنه؛ موضوعش خسارتِ سیستمِ AI در حال اجراست، نه فرآیند تولید کد. شرط‌های پذیرش و ارزیابی مدل رو منتشر نکرده؛ صفحه‌ش می‌گه "Talk to our team to scope a policy". سقفِ ۲۵ میلیون برای یک شرکت بزرگ کمه. منبع، اطلاعیه‌ی خود شرکته.
- **سودش:** بیمه می‌فروشه؛ هر چی ترس از AI بیشتر، بازارش بزرگ‌تر.
- **لینک:** https://www.newswire.ca/news-releases/armilla-launches-affirmative-ai-liability-insurance-with-lloyd-s-underwriter-chaucer-825968681.html
- **چقدر مطمئنیم:** خودش رو خوندیم

### [munichre-aisure] Munich Re: پشتِ ضمانتِ فروشنده‌ی AI می‌ایسته، بعد از سنجیدن مدل
- **کی:** Munich Re، بیمه‌گر اتکایی، محصول aiSure (صفحه‌ی پرسش‌های متداول)
- **تاریخ:** از ۲۰۱۸؛ صفحه‌ی زنده، خونده شد ۲۷ نوامبر ۲۰۲۶
- **چی می‌گه:** مدل اصلی‌شون این نیست که کاربرِ AI رو بیمه کنن؛ فروشنده‌ی AI به مشتری‌هاش performance guarantee می‌ده و Munich Re پشتِ اون ضمانت می‌ایسته: "we back your performance guarantee and compensate your customers". قبل از بیمه، pipeline ساخت مدل رو بررسی می‌کنن (داده‌ی نماینده، drift، monitoring) و از داده‌ی کارکرد قبلی احتمال underperformance رو تخمین می‌زنن: "The quality of the model and its performance stability determine the premium." ‏GenAI و hallucination هم بیمه‌پذیرن.
- **حواست باشه:** این دقیقاً «بیمه‌گر پای Output مدل می‌ایسته»ست، ولی برای مدل‌هایی با معیار سنجش روشن و تاریخچه‌ی کارکرد (اعتبارسنجی وام، classification). درباره‌ی تولید کد یا توسعه‌ی نرم‌افزار هیچی نمی‌گه، و شرط «Review آدم» هم ذکر نشده، نه مثبت نه منفی. محتوا بازاریابی خود شرکته؛ شرایط واقعی بیمه‌نامه رو ندیدیم.
- **سودش:** بیمه‌ی اتکایی می‌فروشه.
- **لینک:** https://www.munichre.com/en/solutions/for-industry-clients/insure-ai/faq.html
- **چقدر مطمئنیم:** خودش رو خوندیم

### [insurers-exclude] بیمه‌گرهای بزرگ: AI رو از بیمه‌نامه بیرون بذاریم
- **کی:** Financial Times (گزارش اصلی)، نقل‌شده در TechCrunch (Connie Loizos) و The Decoder
- **تاریخ:** ۲۳ نوامبر ۲۰۲۵
- **چی می‌گه:** AIG، Great American و WR Berkley از ناظرهای بیمه‌ی آمریکا خواستن اجازه بدن مسئولیت‌های مربوط به AI رو از بیمه‌نامه‌های شرکتی مستثنا کنن؛ پیشنهاد WR Berkley هر ادعای ناشی از استفاده از AI به هر شکلی رو می‌گیره. یک underwriter به FT گفت Output مدل‌ها "too much of a black box"ـه. Aon: صنعت بیمه یک خسارت ۴۰۰ میلیون دلاری رو تحمل می‌کنه، ولی ده هزار خسارت هم‌زمان از خطای یک AI رو نه؛ همون نگرانی `correlated-errors` از زبان بیمه‌گر.
- **حواست باشه:** AIG گفت پرونده رو داده ولی فعلاً قصد اجراش رو نداره. معلوم نیست ناظرها تأیید کردن یا نه. TechCrunch به‌جای AIG اسم Chubb رو می‌بره؛ ما اصل FT (پولی) رو نخوندیم. این درباره‌ی بیمه‌ی عمومی شرکت‌هاست، نه مستقیماً کد.
- **سودش:** بیمه‌گرها نفع دارن ریسکی که نمی‌تونن قیمت بزنن رو بیرون بذارن؛ FT رسانه‌ست.
- **لینک:** https://techcrunch.com/2025/11/23/ai-is-too-risky-to-insure-say-people-whose-job-is-insuring-risk/
- **چقدر مطمئنیم:** از روی گزارش

### [aiuc-1] استاندارد بیمه‌ای برای Agentها، حالا با بند Coding Agent
- **کی:** Artificial Intelligence Underwriting Company (AIUC)، استاندارد AIUC-1، به‌روزرسانی Q3-2026
- **تاریخ:** استاندارد از ژوئیه‌ی ۲۰۲۵؛ به‌روزرسانی Q3 در ۱۴ ژوئیه‌ی ۲۰۲۶
- **چی می‌گه:** استانداردی برای Certify کردن Agentهای AI (شش حوزه: Data & Privacy، Security، Safety، Reliability، Accountability، Society) که به بیمه‌ی مسئولیت گره خورده؛ گواهی یک سال اعتبار داره و هر سه ماه باید دوباره تست بشه. از ژوئیه‌ی ۲۰۲۶ کنترل‌های مخصوص Coding Agent اضافه شد: نشت secret توی کد تولیدی (A008.2)، الگوهای امن و جلوگیری از پکیج‌های "hallucinated or typosquatted" (B010)، اجرای Sandbox شده و اسکن فایل‌های config برای prompt injection (B006.3). در حوزه‌ی Safety: "human-in-the-loop when needed". Cursor، ElevenLabs، Harvey، UiPath و KPMG گواهی گرفتن.
- **حواست باشه:** هیچ‌جای به‌روزرسانی Coding Agent «Review آدم روی کد» شرط نشده؛ Review آدم فقط برای Output پرچم‌خورده و «وقتی لازم باشه». تعارض منافع روشن: AIUC استاندارد رو می‌نویسه، ارزیابی می‌کنه، گواهی می‌ده و بیمه می‌فروشه (نقدِ Lenny Zeltser). سقف بیمه‌ی «تا ۵۰ میلیون دلار» رو فقط از روی گزارش NBC داریم.
- **سودش:** بیمه و گواهی می‌فروشه.
- **لینک:** https://www.aiuc-1.com/research/2026-q3-standard-update
- **چقدر مطمئنیم:** خودش رو خوندیم

### [gh-copilot-approve] GitHub: ‏AI می‌تونه Approve کنه، ولی پیش‌فرض خاموشه
- **کی:** GitHub، Changelog رسمی و مستندات Copilot
- **تاریخ:** ۱ سپتامبر ۲۰۲۶
- **چی می‌گه:** Copilot code review حالا می‌تونه PR رو Approve کنه و این Approve به حساب "required approvals" گذاشته بشه، ولی: "By default, Copilot will not approve pull requests." ادمین سازمان یا Repo باید روشنش کنه و می‌تونه مسیرها (paths) رو محدود کنه؛ Push جدید Approve رو باطل می‌کنه. از طرف دیگه، برای PRهایی که خودِ Copilot coding agent می‌نویسه، مستندات می‌گه Approve کسی که کار رو به Copilot داده حساب نمی‌شه و "Another reviewer must approve the pull request before it can be merged"؛ Workflowهای Actions هم بدون کلیک آدم اجرا نمی‌شن.
- **حواست باشه:** این سیگنالِ تغییره: زیرساخت برای این‌که AI رسماً «تأییدکننده» باشه ساخته شده، ولی تصمیمش به ادمین واگذار شده و پیش‌فرض خاموشه. GitHub نگفته چند درصد روشنش کردن. Public preview.
- **سودش:** GitHub (Microsoft) Copilot می‌فروشه.
- **لینک:** https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests
- **چقدر مطمئنیم:** خودش رو خوندیم

### [ona-merge] ‏AI تأیید می‌کنه، آدم Merge می‌زنه
- **کی:** Benjamin Stark، شرکت Ona (ابزار Agent و محیط توسعه)
- **تاریخ:** ۹ آوریل ۲۰۲۶
- **چی می‌گه:** Agent همه‌ی PRها رو Review می‌کنه و اگه تغییر با شش معیار «کم‌ریسک» بخونه (زیر ۱۰۰۰ خط، بدون migration، بدون تغییر infra و CI، بدون auth، بدون audit logging، بدون protobuf) خودش Approve می‌کنه؛ وگرنه به آدم می‌ده. نتیجه: زمان تا اولین Approve از ۲ ساعت و ۴۹ دقیقه به ۳٫۸ دقیقه؛ Deploy هفتگی از ۳۲۹ به ۱۰۳۷. ولی: "The AI agent can approve the review, but a person always clicks the merge button." دکمه‌ی Merge رو «trust anchor» می‌نامن و هویت کسی که Merge کرده برای SOC 2 ثبت می‌شه.
- **حواست باشه:** شرکت کوچیکه و ابزار Agent می‌فروشه. تقسیم‌بندی‌ش عین ادعای ماست: چک کردن رفت به AI، امضای نهایی موند پیش آدم. Vercel هم ۶ آوریل ۲۰۲۶ پستی داشت که ۵۸٪ PRهای بزرگ‌ترین مونوریپوش بدون Reviewer آدم مرج می‌شن (۶۷۱ PR کم‌ریسک، صفر revert)؛ اون صفحه ۲۷ نوامبر ۲۰۲۶ دیگه باز نمی‌شد (۴۰۴) و فقط خلاصه‌ش رو دیدیم، پس روی اسلاید بهش تکیه نکن.
- **سودش:** ابزار Agent و Review می‌فروشه.
- **لینک:** https://ona.com/stories/auto-approving-low-risk-prs
- **چقدر مطمئنیم:** خودش رو خوندیم

</div>
