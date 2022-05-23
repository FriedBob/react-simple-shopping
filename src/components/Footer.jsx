const thisYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <p>{`ⓒ ${thisYear} FriedBob. All rights reserved.`}</p>
    </footer>
  );
}
