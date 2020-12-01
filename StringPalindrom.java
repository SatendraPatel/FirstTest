
public class StringPalindrom implements Test {

	@Override
	public void palindronString(String s1) {
		// TODO Auto-generated method stub
		
		StringBuilder sb1=new StringBuilder();
		String reverseS1=sb1.append(s1).reverse().toString();

	
		if(s1.equals(reverseS1)) {
			System.out.println("String Check::Palindrom");
		}
		else {
			System.out.println("String Check:: Not a Palindrom");
		}
		
	}
	@Override
	public void palindronChars(String s1) {
		// TODO Auto-generated method stub
				
		String reverseString="";
		
		char[] charA=s1.toCharArray();
	        for( int i = charA.length - 1 ; i >= 0 ; i-- ) {
	            reverseString = reverseString + charA[i];
	        }
	 
	        if (s1.equals(reverseString)) {
	            System.out.println("Char Check::Is Palindrom");
	        } else {
	            System.out.println("Char Check::Not a Palindrom");
	        }

	}
	
	

}
