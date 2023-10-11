package com.java;

public class PangramString 
{
	public static boolean checkPangram(String text)
	{
		text = text.toLowerCase();
		int freq[] = new int[26];
		
		for(int i=0;i<text.length();i++)
		{
			char ch = text.charAt(i);
			if (Character.isLetter(ch)) 
			{
				freq[ch - 'a']++;
			}
		}
		for(int i=0;i<26;i++)
		{
			if(freq[i]==0)
			{
				return false;
			}
		}
		return true;
	}
	
	public static void main(String[] args) {
	
		String text = "Abcdefghijklmnopqrstuvwxyz";
//		String text = "Abcdefghijklmnopqrstuvwx12";
//		String text = "The Quick Brown Fox Jumps Over the Lazy Dog";
		
		if(checkPangram(text)) 
		{
			System.out.println("The string is a pangram.");
		}else {
			System.out.println("The string is not a pangram.");
		}
	}
}
