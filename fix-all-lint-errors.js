const fs = require('fs');
const path = require('path');

const fixes = [
  // Donate.tsx - remove unused import
  {
    file: 'src/components/sections/Donate.tsx',
    find: /import.*formatNumber.*from.*formatting/,
    replace: ''
  },
  {
    file: 'src/components/sections/Donate.tsx',
    find: /} catch \(err\) {/g,
    replace: '} catch {'
  },
  // Hero.tsx - fix apostrophe
  {
    file: 'src/components/sections/Hero.tsx',
    find: /Let's/g,
    replace: 'Let&apos;s'
  },
  // Impact.tsx - fix quotes and apostrophes
  {
    file: 'src/components/sections/Impact.tsx',
    find: /Maria's Story/g,
    replace: 'Maria&apos;s Story'
  },
  {
    file: 'src/components/sections/Impact.tsx',
    find: /"When I became a single mother, I didn't know how I would afford quality/g,
    replace: '&ldquo;When I became a single mother, I didn&apos;t know how I would afford quality'
  },
  {
    file: 'src/components/sections/Impact.tsx',
    find: /they're thriving in elementary school, and I've completed job training to advance/g,
    replace: 'they&apos;re thriving in elementary school, and I&apos;ve completed job training to advance'
  },
  {
    file: 'src/components/sections/Impact.tsx',
    find: /my career\. This foundation changed our lives\." /g,
    replace: 'my career. This foundation changed our lives.&rdquo; '
  },
  // MissionValues.tsx - fix apostrophe and quotes
  {
    file: 'src/components/sections/MissionValues.tsx',
    find: /Grandmother Daisy's legacy/g,
    replace: 'Grandmother Daisy&apos;s legacy'
  },
  {
    file: 'src/components/sections/MissionValues.tsx',
    find: /<div className="absolute -top-4 -left-4 text-6xl text-daisy-bloom-400 opacity-50">\s*"\s*<\/div>/g,
    replace: '<div className="absolute -top-4 -left-4 text-6xl text-daisy-bloom-400 opacity-50">\n              &ldquo;\n            </div>'
  },
  // input.tsx and textarea.tsx - fix empty interface
  {
    file: 'src/components/ui/input.tsx',
    find: /export interface InputProps\s+extends React\.InputHTMLAttributes<HTMLInputElement> \{\}/g,
    replace: 'export type InputProps = React.InputHTMLAttributes<HTMLInputElement>'
  },
  {
    file: 'src/components/ui/textarea.tsx',
    find: /export interface TextareaProps\s+extends React\.TextareaHTMLAttributes<HTMLTextAreaElement> \{\}/g,
    replace: 'export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>'
  },
  // server.ts - remove unused error variables
  {
    file: 'src/lib/supabase/server.ts',
    find: /} catch \(error\) {/g,
    replace: '} catch {'
  },
  // webhooks route - remove unused body variable
  {
    file: 'src/app/api/webhooks/stripe/route.ts',
    find: /const body = await request\.text\(\);/g,
    replace: 'await request.text(); // body validation happens in webhook handler'
  }
];

fixes.forEach(fix => {
  const filePath = path.join(__dirname, fix.file);
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    if (typeof fix.find === 'string') {
      content = content.replace(new RegExp(fix.find, 'g'), fix.replace);
    } else {
      content = content.replace(fix.find, fix.replace);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${fix.file}`);
  } catch (error) {
    console.error(`✗ Error fixing ${fix.file}:`, error.message);
  }
});

console.log('\nAll fixes applied!');
