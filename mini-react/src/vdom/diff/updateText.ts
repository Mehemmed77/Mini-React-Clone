export default function updateText(prev: string, curr: string, el: Node | null) {
  if (prev !== curr && el) el.textContent = curr;
}